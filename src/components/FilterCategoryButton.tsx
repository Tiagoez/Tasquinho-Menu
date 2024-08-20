import React from "react";

type PropsType = {
  name: string;
  selectCategory: (categoryName: string) => void;
  selectedCategories: string[];
};

function MenuCategoryButton(props: PropsType) {
  const { name, selectCategory, selectedCategories } = props;

  function capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  function toggleFilter(): void {
    selectCategory(name);
  }

  const buttonColor = changeButtonColor(
    selectedCategories.includes(name)
  );

  return (
    <button
      onClick={toggleFilter}
      className={`p-2 mr-2 mt-1 border-[0.5px] border-[#000000] font-abeezee rounded-md ${buttonColor}`}
    >
      {capitalizeFirstLetter(name)}
    </button>
  );
}

export default MenuCategoryButton;

export function changeButtonColor(truthyValue: boolean): string {
  if (truthyValue) {
    return "bg-[#FFFFFF] text-white";
  }

  return "text-[#000000]";
}
