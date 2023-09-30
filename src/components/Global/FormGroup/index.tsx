import { FormGroup } from "./styles";

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  type: string;
  placeholder: string;
  label: string;
  id: string;
}

export function FormGroupComponent({
  type,
  placeholder,
  label,
  id,
  ...rest
}: Props) {
  return (
    <FormGroup {...rest}>
      <label htmlFor={id}>{label}</label>
      <input type={type} placeholder={placeholder} id={id} />
    </FormGroup>
  );
}
