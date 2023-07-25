import ComponentLayout from '../layout';

export default function Input() {
  return (
    <ComponentLayout>
      <div className="flex flex-row gap-4">
        <input className="input input-m" />
        <input className="input input-s" />
      </div>

      <div className="flex flex-row gap-4">
        <input className="input input-m" placeholder="Текстовое поле" />
        <input className="input input-s" placeholder="Текстовое поле" />
      </div>

      <div className="flex flex-row gap-4">
        <input className="input input-m input-error" placeholder="Текстовое поле" />
        <input className="input input-s input-error" placeholder="Текстовое поле" />
      </div>

      <div className="flex flex-row gap-4">
        <input className="input input-m input-warning" placeholder="Текстовое поле" />
        <input className="input input-s input-warning" placeholder="Текстовое поле" />
      </div>

      <div className="flex flex-row gap-4">
        <input className="input input-m" placeholder="Текстовое поле" disabled />
        <input className="input input-s" placeholder="Текстовое поле" disabled />
      </div>
    </ComponentLayout>
  );
}
