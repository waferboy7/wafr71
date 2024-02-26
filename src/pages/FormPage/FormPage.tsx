import './FormPage.css';

import { useState } from 'react';

import Header from 'components/Header/Header';
import Form from 'components/Form/Form';
import InputWithLabel from 'components/InputWithLabel/InputWithLabel';
import NormalizeWrapper from 'components/NormalizedWrapper/NormalizedWrapper';
import { FieldForm } from 'constants/fieldForm';
import { IField } from './types';
import Button from 'components/Button/Button';

const FormPage: React.FC = () => {
  const [amountFields, setAmountFields] = useState<IField>({
    [FieldForm.input]: '0',
    [FieldForm.textarea]: '0',
    [FieldForm.checkbox]: '0',
  });

  const [buildData, setBuildData] = useState<IField | null>(null);

  const renderFields = (): JSX.Element[] => {
    const fields: JSX.Element[] = [];

    if (buildData) {
      for (const [fieldType, count] of Object.entries(buildData)) {
        for (let i = 0; i < Number(count); i++) {
          let element: JSX.Element;

          switch (fieldType) {
            case FieldForm.input:
              element = <input type="text" key={fieldType + i} />;
              break;
            case FieldForm.textarea:
              element = <textarea key={fieldType + i} />;
              break;
            case FieldForm.checkbox:
              element = <input type="checkbox" key={fieldType + i} />;
              break;
            default:
              element = <></>;
          }

          fields.push(element);
        }
      }
    }

    return fields;
  };

  const formSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    if (Object.values(amountFields).reduce((prevValue: number, value: string) => prevValue + Number(value), 0) !== 0) {
      setBuildData({ ...amountFields });
    } else {
      setBuildData(null);
    }
  };

  return (
    <>
      <Header />
      <NormalizeWrapper>
        <Form onSubmit={formSubmit}>
          {Object.keys(FieldForm).map((field) => {
            return <InputWithLabel value={field} key={field} onChange={setAmountFields} />;
          })}
          <Button type="submit">Build</Button>
        </Form>
      </NormalizeWrapper>
      {buildData && (
        <NormalizeWrapper>
          <Form>{renderFields()}</Form>
        </NormalizeWrapper>
      )}
    </>
  );
};

export default FormPage;
