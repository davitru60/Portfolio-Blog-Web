/* eslint-disable @typescript-eslint/no-explicit-any */
const CustomImage = ({ alt, src }: any) => (
  <img src={src} alt={alt} className="my-4 mx-auto h-auto w-2/3 rounded-lg object-cover" />
);

export { CustomImage };
