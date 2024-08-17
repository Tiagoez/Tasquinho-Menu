import React from "react";

type PropsType = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function SearchInput(props: PropsType) {
  const { value, onChange } = props;

  return (
    <>
      <input
        placeholder="Search"
        type="text"
        value={value}
        onChange={onChange}
        className="p-1 border-[0.5px] border-[#000000] focus:outline-none bg-[#ffffff] text-[#000000] placeholder-[#000000] font-abeezee"
      />
    </>
  );
}

export default SearchInput;
