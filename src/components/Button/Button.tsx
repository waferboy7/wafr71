import './Button.css';

const Button = ({ children, className = 'button', ...props}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props} className={className}>{children}</button>;
};

export default Button;
