import React from 'react';

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Ashvin Panicker. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        Next.js, TypeScript, Tailwind CSS, Framer Motion, Vercel hosting.
      </p>
    </footer>
  );
}
