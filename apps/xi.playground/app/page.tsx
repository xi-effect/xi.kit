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
      <a href="https://www.google.com/">I am a simple link</a>
      <a href="https://www.google.com/" className="link">
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
      <a href="https://www.google.com/" className="link link-l disabled m-5">
        I am a disabled large link
      </a>
      <a href="https://www.google.com/" className="link link-l link-sky m-5">
        I am a sky large link
      </a>
      <a href="https://www.google.com/" className="link link-l link-brand m-5">
        I am a brand large link
      </a>
      <a href="https://www.google.com/" className="link link-l link-moscow m-5">
        I am a moscow large link
      </a>
      <a href="https://www.google.com/" className="link link-l link-ekaterinburg m-5">
        I am a ekaterinburg large link
      </a>
    </main>
  );
}
