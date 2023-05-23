export interface IProps extends React.HTMLProps<HTMLInputElement> {
    label: string;
    errorMessage?: string;
    value: string;
  };