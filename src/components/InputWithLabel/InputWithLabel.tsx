import './InputWithLabel.css';

import { useState } from 'react';

import NormalizeWrapper from 'components/NormalizedWrapper/NormalizedWrapper';
import { IField } from 'pages/FormPage/types';

interface InputWithLabelProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<IField>>;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({ value, onChange }: InputWithLabelProps) => {
  const [field, setField] = useState('0');

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    const inputValue = e.target.value;

    if (Number(inputValue) < 0) return;

    setField(inputValue);

    onChange((prev) => {
      const updatesField = { ...prev, [value]: inputValue };

      return updatesField;
    });
  };

  return (
    <NormalizeWrapper className="input-with-label">
      <label className="label" htmlFor={value}>
        {value}
      </label>
      <input className="input" type="number" name={value} id={value} placeholder={value} value={field} onChange={onChangeInput} />
    </NormalizeWrapper>
  );
};

export default InputWithLabel;
