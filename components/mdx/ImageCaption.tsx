import Image from "next/image";

interface ImageCaptionProps {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export function ImageCaption({
  src,
  alt,
  caption,
  width,
  height,
}: ImageCaptionProps) {
  return (
    <figure className="my-6 flex flex-col items-center gap-2">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg max-w-full h-auto"
      />
      <figcaption className="text-sm text-[var(--color-text-muted)] text-center">
        {caption}
      </figcaption>
    </figure>
  );
}
