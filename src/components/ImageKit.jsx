import { Image } from "@imagekit/react";

const ImageKit = ({ src, className, w, h, alt }) => {
  return (
    <div className="">
      <Image
        urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
        src={src}
        className={className}
        loading="lazy"
        alt={alt}
        width={w}
        height={h}
      />
    </div>
  );
};

export default ImageKit;
