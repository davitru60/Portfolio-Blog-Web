/* eslint-disable @typescript-eslint/no-explicit-any */

const CustomImage = ({ alt, src }: any) => (
  <img src={src} alt={alt} className="my-4 h-auto w-96 rounded-lg" />
);

export { CustomImage };
