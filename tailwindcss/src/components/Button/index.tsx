import React from "react";

type ButtonProps = {
  text: string;
  outlined?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = (props) => {
  const defaultButtonStyle: string =
    "bg-transparent py-2 px-4 rounded-md text-[#333] font-semibold hover:bg-amber-200 hover:text-white border-solid border-2 border-amber-400";

  const outlinedButtonStyle: string =
    "bg-amber-400 py-2 px-4 rounded-md text-[#333] font-semibold hover:bg-amber-300";

  return (
    <button
      className={!props.outlined ? outlinedButtonStyle : defaultButtonStyle}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
