import React from "react";
import {IconType} from "react-icons";

type PropsType = {
  icon: IconType;
  label: string;
};

function DataState(props: PropsType) {

  return (
    <div className="w-100 h-100">
      <div className="flex justify-center items-center flex-col">
        <props.icon />
        <p className="text-[#000000] font-abeezee mt-2">{props.label}</p>
      </div>
    </div>
  );
}

export default DataState;
