export function PillGroup({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink/80"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
