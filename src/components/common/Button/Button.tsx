import ButtonLink from "./ButtonLink/ButtonLink";
import ButtomBase from "./ButtonBase/ButtomBase";

interface IProps {
  btnType?: "link";
  label: string;
  disabled?: boolean | any;
  onClick?: () => void;
  path?: string | any;
}

const Button: React.FC<IProps> = ({
  btnType,
  label,
  disabled = false,
  onClick,
  path,
}) => {
  return (
    <div>
      {btnType === "link" && (
        <ButtonLink label={label} path={path}></ButtonLink>
      )}
      {!btnType && (
        <ButtomBase
          onClick={onClick}
          label={label}
          disabled={disabled}
        ></ButtomBase>
      )}
    </div>
  );
};

export default Button;