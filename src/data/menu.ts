import { Aperitivo, Pizza, PizzaBianca, Sobremesa, SubMenuType } from "./subMenus";

export type MenuType = {
    Aperitivo: SubMenuType[],
    Pizza: SubMenuType[],
    PizzaBianca: SubMenuType[],
    Sobremesa: SubMenuType[],
}

export const Menu: MenuType = {
    Aperitivo: Aperitivo,
    Pizza: Pizza,
    PizzaBianca: PizzaBianca,
    Sobremesa: Sobremesa,
}