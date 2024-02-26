import './Form.css';

import { ReactForm } from './types';

const Form: React.FC<ReactForm> = ({ children, className = 'form', ...props }: ReactForm) => {
  return (
    <form className={className} {...props}>
      {children}
    </form>
  );
};

export default Form;
