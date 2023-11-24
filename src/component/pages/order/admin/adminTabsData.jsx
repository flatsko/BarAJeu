import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronsDown } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import AdminPageAdd from "./Admin Panel/AdminPageAdd";
import AdminPageEdit from "./Admin Panel/AdminPageEdit";
import HintMessage from "./Admin Panel/HintMessage";
import { EMPTY_PRODUCT } from "../../../../enum/products";

export const adminTabs = (hasAProductClicked) => [
  {
    id: 1,
    index: "add",
    Icon: <AiOutlinePlus />,
    title: "Ajouter des produits",
    showLabel: "addProduct",
    link: <AdminPageAdd />,
  },

  {
    id: 2,
    index: "edit",
    Icon: <MdModeEditOutline />,
    title: "Modifier les produits",
    showLabel: "modProduct",
    link: hasAProductClicked ? <AdminPageEdit /> : <HintMessage />,
  },
];

export const getSelectedTab = (tabs, currentSelectedTab) => {
  return tabs.find((tab) => tab.title === currentSelectedTab);
};
