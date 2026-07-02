interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="font-mono text-xs text-teal tracking-wide mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-50 text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-ink-500 text-base md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
