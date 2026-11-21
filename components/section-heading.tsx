import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  kicker?: string;
};

export default function SectionHeading({ children, kicker }: SectionHeadingProps) {
  return (
    <div className="mb-10 text-center">
      {kicker && (
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
          {kicker}
        </p>
      )}
      <h2 className="font-display text-4xl sm:text-5xl">{children}</h2>
    </div>
  );
}
