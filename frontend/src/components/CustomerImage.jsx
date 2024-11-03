const CustomerImage = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="aspect-square h-full rounded-full object-cover -mr-4"
  />
);
export default CustomerImage;
