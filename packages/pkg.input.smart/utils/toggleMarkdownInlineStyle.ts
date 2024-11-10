import { Editor, Transforms, Range } from 'slate';
import { ReactEditor } from 'slate-react';
import { MarkdownFormatValueT } from '../config';

export const toggleMarkdownInlineStyle = (editor: Editor, marker: MarkdownFormatValueT) => {
  const { selection } = editor;

  if (!selection || Range.isCollapsed(selection) || !marker) {
    return;
  }

  const currentSelection = { ...selection };

  // Обеспечиваем, что anchor всегда будет до focus
  const [start, end] = selection.anchor.offset < selection.focus.offset
    ? [selection.anchor, selection.focus]
    : [selection.focus, selection.anchor];

  // Определяем диапазоны с учётом возможных маркеров с обеих сторон
  const rangeBefore = {
    anchor: { ...start, offset: start.offset - marker.length },
    focus: start
  };

  const rangeAfter = {
    anchor: end,
    focus: { ...end, offset: end.offset + marker.length }
  };

  const textBefore = Editor.string(editor, rangeBefore);
  const textAfter = Editor.string(editor, rangeAfter);

  // Если маркеры присутствуют с обеих сторон, удаляем их
  if (textBefore === marker && textAfter === marker) {
    // Удаляем маркеры
    Transforms.delete(editor, { at: rangeAfter });
    Transforms.delete(editor, { at: rangeBefore });

    // Корректируем курсор на место, где были маркеры
    const newSelection = {
      anchor: { ...currentSelection.anchor, offset: currentSelection.anchor.offset - marker.length },
      focus: { ...currentSelection.focus, offset: currentSelection.focus.offset - marker.length }
    };

    Transforms.select(editor, newSelection);
  } else {
    // Если маркеры не присутствуют, то добавляем их
    const selectedText = Editor.string(editor, selection);
    const startMarkerIdx = selectedText.indexOf(marker);
    const endMarkerIdx = selectedText.lastIndexOf(marker);

    if (startMarkerIdx !== -1 && endMarkerIdx !== -1 && startMarkerIdx !== endMarkerIdx) {
      // Текст с маркерами, удаляем их
      const textWithoutMarkers = selectedText.slice(startMarkerIdx + marker.length, endMarkerIdx);

      // Заменяем выделенный текст на чистый текст без маркеров
      Transforms.delete(editor, { at: selection });
      Transforms.insertText(editor, textWithoutMarkers, { at: start });

      const needRevers = currentSelection.anchor.offset > currentSelection.focus.offset;

      const anchorOffset = needRevers ? currentSelection.focus.offset : currentSelection.anchor.offset;
      const focusOffset = needRevers ? currentSelection.anchor.offset : currentSelection.focus.offset;

      const correctedSelection = {
        anchor:  { ...currentSelection.anchor, offset: anchorOffset },
        focus: { ...currentSelection.focus, offset: focusOffset - marker.length * 2 }
      };

      Transforms.select(editor, correctedSelection);
    } else {
      // Если маркеры не присутствуют, просто добавляем их
      Transforms.insertText(editor, marker, { at: end });
      Transforms.insertText(editor, marker, { at: start });

      // Корректируем курсор на новое место
      const correctedSelection = {
        anchor: { ...currentSelection.anchor, offset: currentSelection.anchor.offset + marker.length },
        focus: { ...currentSelection.focus, offset: currentSelection.focus.offset + marker.length }
      };

      Transforms.select(editor, correctedSelection);
    }
  }

  // Сохраняем фокус в редакторе
  ReactEditor.focus(editor);
};
