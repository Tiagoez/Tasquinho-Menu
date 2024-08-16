import React from "react";

type PropsType = {
  name: string;
  selectOtherCategories: (filterName: string) => void;
  buttonColor: string;
};

function OtherFilterButton(props: PropsType) {
  const { name, selectOtherCategories, buttonColor } = props;

  return (
    <button
      className={`p-2 mr-2 mt-1 border-[0.5px] border-[#000000] font-abeezee rounded-md ${buttonColor}`}
      onClick={() => selectOtherCategories(name)}
    >
      {name}
    </button>
  );
}

export default OtherFilterButton;
