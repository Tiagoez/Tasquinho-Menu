import React from "react";
import MenuCategoryButton from "./FilterCategoryButton";
import { Menu, MenuType } from "../data/menu";
import { FilterValuesType } from "../hooks/useFilter";
import { changeButtonColor } from "./FilterCategoryButton";
import OtherFilterButton from "./OtherFilterButton";
import ModalButton from "./ModalButton";
import { ButtonTypeEnum } from "../enums/ButtonTypeEnum";
import {MdClose} from "react-icons/md";

type PropsType = {
  filterMenuByCategory: (
    categories: string[],
    filters: {
      isNew?: boolean;
      isBestSeller?: boolean;
      isVegetarian?: boolean;
    }
  ) => void;
  toggleFilterModal: () => void;
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<
    React.SetStateAction<string[]>
  >;
  filterValues: FilterValuesType;
  setFilterValues: React.Dispatch<React.SetStateAction<FilterValuesType>>;
  removeFilter: () => void;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

function FilterModal(props: PropsType) {
  const {
    filterMenuByCategory,
    toggleFilterModal,
    selectedCategories,
    setSelectedCategories,
    filterValues,
    setFilterValues,
    removeFilter,
    setSearchValue,
  } = props;

  const menuData: MenuType[] = Menu;

  function getMenuCategories(): Array<JSX.Element> {
    let subMenuItems: Array<JSX.Element> = [];

    for (const subMenu of menuData) {
      let createdSubMenu = (
        <MenuCategoryButton
          name={subMenu.name}
          selectCategory={selectCategory}
          selectedCategories={selectedCategories}
        />
      );

      subMenuItems.push(createdSubMenu);
    }

    return subMenuItems.map((item) => item);
  }

  function selectCategory(categoryName: string): void {
    setSelectedCategories((prevData) => {
      if (selectedCategories.includes(categoryName)) {
        return prevData.filter((item) => item !== categoryName);
      }

      return [...prevData, categoryName];
    });
  }

  function selectOtherCategories(filterName: string): void {
    if (filterName === "Vegetarian") {
      setFilterValues((prevData) => {
        return {
          ...prevData,
          isVegetarian: !filterValues.isVegetarian,
        };
      });
    }

    if (filterName === "New") {
      setFilterValues((prevData) => {
        return {
          ...prevData,
          isNew: !filterValues.isNew,
        };
      });
    }

    if (filterName === "Best Seller") {
      setFilterValues((prevData) => {
        return {
          ...prevData,
          isBestSeller: !filterValues.isBestSeller,
        };
      });
    }
  }

  function applyFilters(): void {
    filterMenuByCategory(selectedCategories, filterValues);
    toggleFilterModal();
    setSearchValue("");
  }

  const applyFilterButton = (
    <ModalButton
      label={"Apply filters"}
      onClick={applyFilters}
      type={ButtonTypeEnum.FILLED}
    />
  );
  const clearFilterButton = (
    <ModalButton
      label={"Clear"}
      onClick={removeFilter}
      type={ButtonTypeEnum.OUTLINE}
    />
  );

  function displayModalButtons(): JSX.Element {
    if (
      selectedCategories.length !== 0 ||
        filterValues.isVegetarian ||
      filterValues.isNew ||
      filterValues.isBestSeller
    ) {
      return (
        <>
          <hr className="w-100 mt-4 border-[#000000]" />
          <div className="flex justify-end gap-2 mt-2">
            {applyFilterButton}
            {clearFilterButton}
          </div>
        </>
      );
    }

    return (
      <>
        <hr className="w-100 mt-4 border-[#000000]" />
        <div className="flex justify-end gap-2 mt-2">{applyFilterButton}</div>
      </>
    );
  }

  const VegetarianButtonColor = changeButtonColor(filterValues.isVegetarian);
  const bestSellerButtonColor = changeButtonColor(filterValues.isBestSeller);
  const newButtonColor = changeButtonColor(filterValues.isNew);

  return (
    <div className="fixed mt-5 m-3">
      <div className="z-10 p-4 w-100 rounded-md bg-[#FFFFFF] border-[1px] border-[#000000] flex justify-center flex-col">
        <div className="flex justify-end">
          <button onClick={toggleFilterModal}>
            <MdClose />
          </button>
        </div>

        <div>
          <p className="font-oxygen font-bold text-[#000000] text-lg mb-2">
            Menu Categories
            <hr className="w-100 mt-1 border-[#000000]" />
          </p>

          <div className="flex flex-wrap gap-1">{getMenuCategories()}</div>
        </div>

        <div className="mt-3">
          <p className="font-oxygen font-bold text-[#000000] text-lg">
            Others
            <hr className="w-100 mt-1 border-[#00000] mb-2" />
          </p>

          <div className="flex flex-wrap gap-1">
            <OtherFilterButton
              name={"Vegetarian"}
              selectOtherCategories={selectOtherCategories}
              buttonColor={VegetarianButtonColor}
            />
            <OtherFilterButton
              name={"Best Seller"}
              selectOtherCategories={selectOtherCategories}
              buttonColor={bestSellerButtonColor}
            />
            <OtherFilterButton
              name={"New"}
              selectOtherCategories={selectOtherCategories}
              buttonColor={newButtonColor}
            />
          </div>
        </div>

        {displayModalButtons()}
      </div>
    </div>
  );
}

export default FilterModal;
