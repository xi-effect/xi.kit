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
        <a href="https://www.google.com/" className="link link-l link-blue">
          I am a blue large link
        </a>
        <a href="https://www.google.com/" className="link link-l link-red">
          I am a red large link
        </a>
        <a href="https://www.google.com/" className="link link-l link-green">
          I am a green large link
        </a>
      </div>
    </div>
  );
}
