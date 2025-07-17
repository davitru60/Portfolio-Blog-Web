/* eslint-disable @typescript-eslint/no-explicit-any */
const CustomImage = ({ alt, src }: any) => (
  <img
    src={src}
    alt={alt}
    className="mx-auto my-4 h-auto w-full rounded-lg object-cover sm:w-2/3"
  />
);

export { CustomImage };
