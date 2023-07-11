export default function Input() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <div className="flex flex-row gap-4">
        <input className="input input-m" />
        <input className="input input-s" />
      </div>

      <div className="flex flex-row gap-4">
        <input className="input input-m input-error" />
        <input className="input input-s input-error" />
      </div>

      <div className="flex flex-row gap-4">
        <input className="input input-m input-warning" />
        <input className="input input-s input-warning" />
      </div>

      <div className="flex flex-row gap-4">
        <input className="input input-m" disabled />
        <input className="input input-s" disabled />
      </div>
    </main>
  );
}
