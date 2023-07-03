'use client';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-1 p-24">
      <button type="button" className="btn btn-s">
        Click me
      </button>
      <button type="button" className="btn btn-m">
        Click me
      </button>
      <button type="button" className="btn btn-l">
        Click me
      </button>
      <button type="button" className="btn btn-s btn-primary">
        Click me
      </button>
      <button type="button" className="btn btn-m btn-primary">
        Click me
      </button>
      <button type="button" className="btn btn-l btn-primary">
        Click me
      </button>
    </main>
  );
}
