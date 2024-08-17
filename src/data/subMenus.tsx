export type SubMenuType = {
  name: string;
  details: string;
  isVegetarian: boolean;
  isBestSeller: boolean;
  isNew: boolean;
  price: number;
};

export const Aperitivo: SubMenuType[] = [
  {
    name: "Pão de alho",
    details: "pão grelhado, alho e parmesao",
    isVegetarian: true,
    isNew: false,
    isBestSeller: true,
    price: 2.00,
  },
  {
    name: "Capresse",
    details: "mozzarella bocconcini fior di latte, tomate e manjericao",
    isVegetarian: true,
    isNew: false,
    isBestSeller: false,
    price: 4.00,
  },
  {
    name: "Bruschetta",
    details: "tomate aux bocadinhos, alho e azeite",
    isVegetarian: true,
    isNew: false,
    isBestSeller: false,
    price: 4.50,
  },
  {
    name: "Crostini",
    details: "pão grelhado, tomate, mozzarella, manjericão e presunto",
    isVegetarian: false,
    isNew: false,
    isBestSeller: false,
    price: 5.00,
  },
  {
    name: "Burrata",
    details: "burrata, tomate e presunto",
    isVegetarian: false,
    isNew: false,
    isBestSeller: false,
    price: 6.00,
  },
  {
    name: "Affettati mixte",
    details: "tabua de enchidos para duas pessoas",
    isVegetarian: false,
    isNew: false,
    isBestSeller: false,
    price: 8.00,
  },
  {
    name: "Tagliere miste",
    details: "tabua miste (enchidos e queijos)",
    isVegetarian: false,
    isNew: false,
    isBestSeller: false,
    price: 8.00,
  },
];

export const Pizza: SubMenuType[] = [
  {
    name: "Margherita",
    details: "tomate, mozzarella e oregaos",
    isVegetarian: true,
    isNew: false,
    isBestSeller: false,
    price: 6.00,
  },
  {
    name: "Cotto",
    details: "tomate, mozzarella e fiambre",
    isVegetarian: false,
    isNew: false,
    isBestSeller: false,
    price: 6.50,
  },
  {
    name: "Antiga",
    details: "tomate, mozzarella, anchova, cebola e alcaparras",
    isVegetarian: false,
    isNew: false,
    isBestSeller: false,
    price: 6.50,
  },
  {
    name: "Beringela",
    details: "tomate, mozzarella, cebola, ricotta e beringela frita",
    isVegetarian: true,
    isNew: true,
    isBestSeller: false,
    price: 7.00,
  },
  {
    name: "Vegetariana",
    details: "legumes do dia",
    isVegetarian: true,
    isNew: false,
    isBestSeller: false,
    price: 7.00,
  },
  {
    name: "Marinara",
    details: "tomate, mozzarella, atum, cebola, pimento",
    isVegetarian: false,
    isNew: false,
    isBestSeller: false,
    price: 7.50,
  },
  {
    name: "Toscana",
    details: "tomate, mozzarella, salsicha fresca, cebola e azeitonas",
    isVegetarian: false,
    isNew: false,
    isBestSeller: false,
    price: 7.50,
  },
  {
    name: "Parma",
    details: "tomate, mozzarella , fiambre, cogumelos e azeitonas",
    isVegetarian: false,
    isNew: false,
    isBestSeller: true,
    price: 7.50,
  },
  {
    name: "Calabria",
    details: "tomate, mozzarella, chourica spianata, bacon",
    isVegetarian: false,
    isNew: false,
    isBestSeller: true,
    price: 7.50,
  },
  {
    name: "Trieste",
    details: "tomate, queijo scamorza fumafa, speck, alcachofra",
    isVegetarian: false,
    isNew: false,
    isBestSeller: false,
    price: 8.00,
  },
  {
    name: "Emilia Romagnia",
    details: "tomate, presunto, burrata, rucula e parmesao",
    isVegetarian: false,
    isNew: false,
    isBestSeller: true,
    price: 8.50,
  },
];

export const PizzaBianca: SubMenuType[] = [
  {
    name: "Bianca",
    details: "cebola, mozzarella e queijo parmesao",
    isVegetarian: true,
    isNew: false,
    isBestSeller: false,
    price: 4.50,
  },
  {
    name: "Pizza Bruschetta",
    details: "tomate fresco, queijo burrata, parmesao e vinagre balsamico",
    isVegetarian: true,
    isNew: false,
    isBestSeller: false,
    price: 7.50,
  },
  {
    name: "4 Formaggi",
    details: "selecão de queijos do chef",
    isVegetarian: true,
    isNew: false,
    isBestSeller: false,
    price: 8.00,
  },
];

export const Sobremesa: SubMenuType[] = [
  {
    name: "Focaccia Nutella",
    details: "",
    isVegetarian: false,
    isNew: false,
    isBestSeller: false,
    price: 5.0,
  },
  {
    name: "Tiramisu",
    details: "",
    isVegetarian: false,
    isNew: false,
    isBestSeller: false,
    price: 3.00,
  },
  {
    name: "Panna Cotta",
    details: "",
    isVegetarian: false,
    isNew: false,
    isBestSeller: false,
    price: 3.00,
  },
  {
    name: "Creme Brulée",
    details: "",
    isVegetarian: false,
    isNew: false,
    isBestSeller: false,
    price: 3.00,
  },
];

export const Bebidas: SubMenuType[] = [
  {
    name: "Halo-halo",
    details: "",
    isVegetarian: false,
    isNew: false,
    isBestSeller: true,
    price: 45.0,
  },
  {
    name: "Leche Flan",
    details: "",
    isVegetarian: false,
    isNew: false,
    isBestSeller: true,
    price: 30.0,
  },
];
