/* eslint-disable @typescript-eslint/no-explicit-any */

const CustomImage = ({ alt, src }: any) => (
  <img 
    src={src} 
    alt={alt} 
    className="my-4 max-w-full h-auto rounded-lg shadow-lg" 
  />
);

export {CustomImage};
