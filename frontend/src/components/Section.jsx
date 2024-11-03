const Section = ({ children, className }) => (
  <div className={`pt-3 sm:pt-5 w-full px-4 sm:px-10 ${className}`}>
    {children}
  </div>
);
export default Section;
