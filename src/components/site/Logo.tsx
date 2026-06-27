/**
 * FlowRail wordmark logo. Transparent background, sized to fit the nav.
 * If the source wordmark renders too dark on the dark nav, a CSS brightness
 * filter is applied to keep it legible without wrapping it in a light tile.
 */
import logoAsset from "@/assets/flowrail-logo.png.asset.json";

export function Logo({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const height =
    size === "lg"
      ? "h-16 md:h-[5.5rem]"
      : size === "sm"
      ? "h-10"
      : "h-12 md:h-16";

  return (
    <img
      src={logoAsset.url}
      alt="FlowRail"
      className={`${height} w-auto max-w-[190px] md:max-w-[280px] object-contain select-none ${className}`}
      style={{
        filter: "brightness(1.15) contrast(1.05)",
      }}
      draggable={false}
    />
  );
}
