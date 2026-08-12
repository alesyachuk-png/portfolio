export function ConfidentialNote({ text }: { text: string }) {
  return (
    <p className="max-w-2xl border-l-2 border-accent-200 pl-4 text-sm italic leading-relaxed text-ink/50">
      {text}
    </p>
  );
}
