'use client';

export default function Button() {
  return (
    <main className="flex flex-col items-center gap-7 p-24">
      <div className="flex flex-row gap-4">
        <button type="button" className="btn btn-s">
          Click me
        </button>
        <button type="button" className="btn btn-m">
          Click me
        </button>
        <button type="button" className="btn btn-l">
          Click me
        </button>
      </div>

      <div className="flex flex-row gap-4">
        <button type="button" className="btn btn-s" disabled>
          Click me
        </button>
        <button type="button" className="btn btn-m" disabled>
          Click me
        </button>
        <button type="button" className="btn btn-l" disabled>
          Click me
        </button>
      </div>

      <div className="flex flex-row gap-4">
        <button type="button" className="btn btn-s btn-primary">
          Click me
        </button>
        <button type="button" className="btn btn-m btn-primary">
          Click me
        </button>
        <button type="button" className="btn btn-l btn-primary">
          Click me
        </button>
      </div>

      <div className="flex flex-row gap-4">
        <button type="button" className="btn btn-s btn-error">
          Click me
        </button>
        <button type="button" className="btn btn-m btn-error">
          Click me
        </button>
        <button type="button" className="btn btn-l btn-error">
          Click me
        </button>
      </div>

      <div className="flex flex-row gap-4">
        <button type="button" className="btn btn-s btn-success">
          Click me
        </button>
        <button type="button" className="btn btn-m btn-success">
          Click me
        </button>
        <button type="button" className="btn btn-l btn-success">
          Click me
        </button>
      </div>

      <div className="flex flex-row gap-4">
        <button type="button" className="btn btn-s btn-outlined">
          Click me
        </button>
        <button type="button" className="btn btn-m btn-outlined">
          Click me
        </button>
        <button type="button" className="btn btn-l btn-outlined">
          Click me
        </button>
      </div>

      <div className="flex flex-row gap-4">
        <button type="button" className="btn btn-s btn-text">
          Click me
        </button>
        <button type="button" className="btn btn-m btn-text">
          Click me
        </button>
        <button type="button" className="btn btn-l btn-text">
          Click me
        </button>
      </div>

      <div className="flex flex-row gap-4">
        <button type="button" className="btn btn-s btn-text" disabled>
          Click me
        </button>
        <button type="button" className="btn btn-m btn-text" disabled>
          Click me
        </button>
        <button type="button" className="btn btn-l btn-text" disabled>
          Click me
        </button>
      </div>
    </main>
  );
}
