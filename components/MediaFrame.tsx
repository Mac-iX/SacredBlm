type Props = {
  assetId: string;
  description: string;
  altGuidance: string;
  aspectRatio?: string;
  caption?: string;
  variant?: "default" | "arch" | "logo";
};

export function MediaFrame({
  assetId,
  description,
  altGuidance,
  aspectRatio = "4:3",
  caption,
  variant = "default"
}: Props) {
  return (
    <figure
      className={`media-frame media-frame--${variant}`}
      data-asset-id={assetId}
      data-aspect-ratio={aspectRatio}
      data-alt-guidance={altGuidance}
    >
      <div className="media-frame__visual">
        <span>{assetId}</span>
      </div>
      <figcaption>
        <strong>Image direction:</strong> {description}
        {caption ? <small>{caption}</small> : null}
      </figcaption>
    </figure>
  );
}
