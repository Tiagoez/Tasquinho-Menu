import React, {useState} from "react";
import {MenuType} from "../data/menu";
import {FilterValuesType} from "./useFilter";

function useSearch(
    menuData: MenuType[],
    setMenuData: React.Dispatch<React.SetStateAction<MenuType[]>>,
    setAppliedFilterValues: React.Dispatch<
        React.SetStateAction<FilterValuesType>
    >,
    setAppliedSelectedCategories: React.Dispatch<
        React.SetStateAction<string[]>
    >
) {
    const [timer, setTimer] = useState(null);
    const [searchValue, setSearchValue] = useState<string>("");
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [originalMenuData] = useState<MenuType[]>(menuData);

    function getSearchedData(): void {
        setMenuData(originalMenuData);

        let menuDataObject: MenuType[] = [];

        for (const subMenu of menuData) {
            const foodList = subMenu.items;

            menuDataObject.push({
                name: subMenu.name,
                items: foodList.filter((item) =>
                    item.name.toLowerCase().includes(searchValue.toLowerCase())
                )
            });
            setIsSearching(false);
        }

        setMenuData(menuDataObject);
    }

    function changeSearchValue(event: React.ChangeEvent<HTMLInputElement>): void {
        setIsSearching(true);
        setSearchValue(event.target.value);
        setAppliedSelectedCategories([]);
        setAppliedFilterValues({
            isNew: false,
            isBestSeller: false,
            isVegetarian: false
        });

        if (event.target.value.trim() === "") {
            setIsSearching(false);
            clearTimeout(timer as any);
            return setMenuData(originalMenuData);
        }

        clearTimeout(timer as any);
        const newTimer = setTimeout(() => getSearchedData(), 1000);
        setTimer(newTimer as any);
    }

    return {
        searchValue,
        changeSearchValue,
        isSearching,
        setSearchValue,
    };
}

export default useSearch;
