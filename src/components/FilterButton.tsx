import React from "react";

type PropsType = {
  onClick: () => void;
};

function FilterButton(props: PropsType) {
  const { onClick } = props;

  return (
    <button
      className="py-1 border-[0.5px] border-[#3F3F3F] text-[#000000]"
      onClick={onClick}
    >
      Filter
    </button>
  );
}

export default FilterButton;
