import './NormalizedWrapper.css';

const NormalizeWrapper = ({ children, className = 'normalized-wrapper', ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={className}>{children}</div>;
};

export default NormalizeWrapper;
