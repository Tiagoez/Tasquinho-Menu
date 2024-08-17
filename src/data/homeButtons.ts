import {FaInstagram} from "react-icons/fa";
import {IconType} from "react-icons";
import {GrRestaurant} from "react-icons/gr";
import {LiaFacebookSquare} from "react-icons/lia";

type HomeButtonsType = {
  label: string;
  icon: IconType;
  link: string;
  isTargetBlank: boolean;
};

export const HomeButtonsData: HomeButtonsType[] = [
  {
    label: 'MENU',
    icon: GrRestaurant,
    link: '/menu',
    isTargetBlank: false,
  },
  {
    label: 'FACEBOOK',
    icon: LiaFacebookSquare,
    link: 'https://www.facebook.com/profile.php?id=100056494126599',
    isTargetBlank: true,
  },
  {
    label: 'INSTAGRAM',
    icon: FaInstagram,
    link: 'https://www.instagram.com/tasquinhopizzeria/',
    isTargetBlank: true,
  }
];
