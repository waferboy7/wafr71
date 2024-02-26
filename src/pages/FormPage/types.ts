import { FieldForm } from 'constants/fieldForm';

export interface IField {
  [FieldForm.input]: string;
  [FieldForm.textarea]: string;
  [FieldForm.checkbox]: string;
}
