import React, {useState} from "react";
import {MenuType} from "../data/menu";

export type FilterValuesType = {
    isNew: boolean;
    isBestSeller: boolean;
    isVegetarian: boolean;
};

function useFilter(
    menuData: MenuType[],
    setMenuData: React.Dispatch<React.SetStateAction<MenuType[]>>
) {
    const [selectedCategories, setSelectedCategories] = useState<
        Array<string>
    >([]);

    const [filterValues, setFilterValues] = useState<FilterValuesType>({
        isNew: false,
        isBestSeller: false,
        isVegetarian: false
    });

    const [appliedSelectedCategories, setAppliedSelectedCategories] = useState<
        Array<string>
    >([]);

    const [appliedFilterValues, setAppliedFilterValues] =
        useState<FilterValuesType>({
            isNew: false,
            isBestSeller: false,
            isVegetarian: false
        });

    const [showFilterModal, setShowFilterModal] = useState<boolean>(false);

    const [originalMenuData] = useState<MenuType[]>(menuData);

    function removeFilter(): void {
        setSelectedCategories([]);
        setFilterValues({
            isNew: false,
            isBestSeller: false,
            isVegetarian: false
        });
        setMenuData(originalMenuData);
    }

    const otherFiltersOnlyAreSelected =
        selectedCategories.length === 0 &&
        (filterValues.isNew || filterValues.isBestSeller);

    const noFiltersAreSelected =
        selectedCategories.length === 0 &&
        !filterValues.isNew &&
        !filterValues.isBestSeller;

    function filterMenuByCategory(
        categories: string[],
        filters: {
            isNew?: boolean;
            isBestSeller?: boolean;
            isVegetarian?: boolean;
        } = {}
    ) {
        let filteredMenu: MenuType[] = [];

        if (otherFiltersOnlyAreSelected) {
            categories = menuData.map(category => category.name);
        }

        if (noFiltersAreSelected) {
            setAppliedSelectedCategories([]);
            setAppliedFilterValues({
                isNew: false,
                isBestSeller: false,
                isVegetarian: false
            });
            return setMenuData(originalMenuData);
        }

        for (const subMenu of originalMenuData) {
            let categoryMenu = subMenu.items;

            if (
                !categories.includes(subMenu.name) &&
                (!filters.isNew || !filters.isBestSeller)
            ) {
                categoryMenu = [];
            }

            if (filters.isNew && categories.includes(subMenu.name)) {
                categoryMenu = categoryMenu.filter((item) => item.isNew);
            }

            if (
                filters.isBestSeller &&
                categories.includes(subMenu.name)
            ) {
                categoryMenu = categoryMenu.filter(
                    (item) => item.isBestSeller
                );
            }

            filteredMenu.push({name: subMenu.name, items: categoryMenu});
        }

        setMenuData(filteredMenu);
        setAppliedSelectedCategories(selectedCategories);
        setAppliedFilterValues(filterValues);
    }

    console.log(appliedSelectedCategories);
    console.log(appliedFilterValues);

    function toggleFilterModal(): void {
        setShowFilterModal(!showFilterModal);
        setSelectedCategories(appliedSelectedCategories);
        setFilterValues(appliedFilterValues);
    }

    return {
        selectedCategories,
        setSelectedCategories,
        filterValues,
        setFilterValues,
        filterMenuByCategory,
        removeFilter,
        toggleFilterModal,
        showFilterModal,
        setAppliedSelectedCategories,
        setAppliedFilterValues
        //number of filters
    };
}

export default useFilter;
