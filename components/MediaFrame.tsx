type Props = {
  assetId: string;
  description: string;
  altGuidance: string;
  aspectRatio?: string;
  caption?: string;
  label?: string;
  variant?: "default" | "arch" | "logo";
};

export function MediaFrame({
  assetId,
  description,
  altGuidance,
  aspectRatio = "4:3",
  caption,
  label = "Image placement",
  variant = "default"
}: Props) {
  return (
    <figure
      className={`media-frame media-frame--${variant}`}
      data-asset-id={assetId}
      data-aspect-ratio={aspectRatio}
      data-alt-guidance={altGuidance}
      data-image-description={description}
    >
      <div className="media-frame__visual">
        <span className="media-frame__label">{label}</span>
      </div>
      <figcaption>
        <strong>Image direction:</strong> {description}
        {caption ? <small>{caption}</small> : null}
      </figcaption>
    </figure>
  );
}
