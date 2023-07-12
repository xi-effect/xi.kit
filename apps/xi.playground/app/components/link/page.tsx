'use client';

export default function Link() {
  return (
    <div className="flex gap-10 m-10">
      <div className="flex flex-col gap-3">
        <a href="https://www.google.com/" className="link link-l">
          I am a default large link
        </a>
        <a href="https://www.google.com/" className="link link-m">
          I am a default medium link
        </a>
        <a href="https://www.google.com/" className="link link-s">
          I am a default small link
        </a>
      </div>

      <div className="flex flex-col gap-3">
        <a href="https://www.google.com/" className="link link-disabled link-l">
          I am a disabled large link
        </a>
        <a href="https://www.google.com/" className="link link-disabled link-m">
          I am a disabled medium link
        </a>
        <a href="https://www.google.com/" className="link link-disabled link-s">
          I am a disabled small link
        </a>
      </div>

      <div className="flex flex-col gap-3">
        <a href="https://www.google.com/" className="link link-l link-sky">
          I am a sky large link
        </a>
        <a href="https://www.google.com/" className="link link-l link-brand">
          I am a brand large link
        </a>
        <a href="https://www.google.com/" className="link link-l link-moscow">
          I am a moscow large link
        </a>
        <a href="https://www.google.com/" className="link link-l link-ekaterinburg">
          I am a ekaterinburg large link
        </a>
      </div>
    </div>
  );
}
