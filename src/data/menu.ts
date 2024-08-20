import {Aperitivo, Pizza, PizzaBianca, Sobremesa, SubMenuType} from "./subMenus";

export type MenuType = {
    name: string,
    items: SubMenuType[]
}
export const Menu: MenuType[] = [ Aperitivo, Pizza, PizzaBianca, Sobremesa];