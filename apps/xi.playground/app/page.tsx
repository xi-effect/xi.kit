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
      <div className="flex p-5 gap-5">
        <a href="https://www.google.com/" className="link color-red-60">
          I am a default link
        </a>
        <a href="https://www.google.com/" className="link link-s">
          I am a small link
        </a>
        <a href="https://www.google.com/" className="link link-m">
          I am a medium link
        </a>
        <a href="https://www.google.com/" className="link link-l">
          I am a large link
        </a>
        <a className="link link-l link-disabled">I am a disabled large link</a>
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
    </main>
  );
}
