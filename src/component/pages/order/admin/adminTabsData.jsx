
import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';

export const adminTabs = [
  {
    id: 1,
    index: "add",
    Icon: <AiOutlinePlus />,
    title: "Ajouter des produits",
    showLabel: "addProduct",
    link: "",
  },

  {
    id: 2,
    index: "edit",
    Icon: <MdModeEditOutline />,
    title: "Modifier les produits",
    showLabel: "modProduct",
    link: "",
  },
];

export const getSelectedTab = (tabs, currentSelectedTab) =>
{
   tabs.find((tab) => tab.index === currentSelectedTab )
} 
