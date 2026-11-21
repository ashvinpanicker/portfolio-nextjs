export default function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <header className="container-x pt-36 pb-16 sm:pt-44">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h1 className="max-w-4xl font-display text-5xl leading-[0.98] sm:text-7xl">{title}</h1>
      {children && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-sand/75">{children}</div>}
    </header>
  );
}
