import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-x grid min-h-[70vh] place-content-center text-center">
      <p className="eyebrow">404 · no wind here</p>
      <h1 className="mt-4 font-display text-6xl">Lost the line.</h1>
      <Link href="/" className="link mt-6">Back to the beach →</Link>
    </div>
  );
}
