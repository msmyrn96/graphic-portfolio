export type IconItem = { url: string; name: string; invert?: boolean }

export const IconTile = ({
  icon,
  className,
}: {
  icon: IconItem
  className?: string
}) => {
  return (
    <div
      className={`h-24 w-24 flex-shrink-0 rounded-2xl flex items-center justify-center flex-col gap-2 ${className || ""}`}
      title={icon.name}
      style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--border)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={icon.url}
        alt={icon.name}
        width={48}
        height={48}
        className={`object-contain${icon.invert ? " invert" : ""}`}
        loading="lazy"
      />
      <p
        className="text-[12px] font-medium"
        style={{ color: "var(--text-secondary)" }}
      >
        {icon.name}
      </p>
    </div>
  )
}
