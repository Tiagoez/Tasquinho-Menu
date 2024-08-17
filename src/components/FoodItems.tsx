import React from "react";
import { SubMenuType } from "../data/subMenus";
import { RiLeafFill } from "react-icons/ri";
import { RiHeart3Fill } from "react-icons/ri";

type PropsType = {
  foodList: SubMenuType[];
};

function FoodItems(props: PropsType) {
  const { foodList } = props;

  const createdFoodLists = foodList.map((item) => {
      const heartIcon = <RiHeart3Fill className="text-red ml-1" />;
      const vegetarianIcon = <RiLeafFill className="text-green ml-1" />;
      const newIcon = <div className="bg-[#000000] text-white p-1 ml-1 text-[10px] rounded-md">New!</div>

    return (
        <div className="mb-1">
            <div className="flex justify-between">
                <p className="mr-10 flex items-center">
                    {item.name}
                    {item.isVegetarian && vegetarianIcon}
                    {item.isBestSeller && heartIcon}
                    {item.isNew && newIcon}
                </p>
                <p>{item.price.toFixed(2)} €</p>
            </div>
            <small className="text-neutral-500">{item.details}</small>
        </div>
  )
      ;
  });

    return (
        <div className="font-abeezee text-[#1c1c1c] my-2">{createdFoodLists}</div>
    );
}

export default FoodItems;
