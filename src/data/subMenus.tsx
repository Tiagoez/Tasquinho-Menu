export type SubMenuType = {
  name: string;
  details: string;
  isNew: boolean;
  isFavorite: boolean;
  price: number;
};

export const Breakfast: SubMenuType[] = [
  {
    name: "Tapa & Garlic Fried Rice",
    details: "",
    isNew: false,
    isFavorite: false,
    price: 100.5,
  },
  {
    name: "Longganisa & Garlic Fried Rice",
    details: "",
    isNew: false,
    isFavorite: false,
    price: 100.5,
  },
  {
    name: "Bangus & Garlic Fried Rice",
    details: "",
    isNew: true,
    isFavorite: false,
    price: 100.5,
  },
];

export const Pork: SubMenuType[] = [
  {
    name: "Pork Sinigang",
    details: "",
    isNew: false,
    isFavorite: true,
    price: 100.0,
  },
];

export const Beef: SubMenuType[] = [
  {
    name: "Bulalo",
    details: "",
    isNew: false,
    isFavorite: true,
    price: 100.0,
  },
];

export const Seafood: SubMenuType[] = [
  {
    name: "Friend Tilapia",
    details: "",
    isNew: false,
    isFavorite: true,
    price: 100.0,
  },
];

export const Dessert: SubMenuType[] = [
  {
    name: "Halo-halo",
    details: "",
    isNew: false,
    isFavorite: true,
    price: 100.0,
  },
];
