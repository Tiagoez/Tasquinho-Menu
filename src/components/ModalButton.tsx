import React from "react";
import { ButtonTypeEnum } from "../enums/ButtonTypeEnum";

type PropsType = {
  label: string;
  type: string;
  onClick: () => void;
};

function ModalButton(props: PropsType) {
  const { type, label, onClick } = props;

  function getClassName(): string {
    if (type === ButtonTypeEnum.FILLED) {
      return "bg-[#000000] text-white p-2 rounded-md";
    }

    return "border-[0.5px] border-[#000000] text-[#000000] p-2 rounded-md";
  }

  return (
    <button onClick={onClick} className={` ${getClassName()}`}>
      {label}
    </button>
  );
}

export default ModalButton;
