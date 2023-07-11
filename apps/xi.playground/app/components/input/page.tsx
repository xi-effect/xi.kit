export default function Input() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
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
    </main>
  );
}
