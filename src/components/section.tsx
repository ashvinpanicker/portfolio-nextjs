import clsx from "clsx";

export default function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={clsx("scroll-mt-20 py-24 sm:py-32", className)}>
      <div className="container-x">
        {(eyebrow || title) && (
          <header className="mb-12 max-w-3xl">
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            {title && <h2 className="font-display text-4xl leading-[1.05] sm:text-6xl">{title}</h2>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
