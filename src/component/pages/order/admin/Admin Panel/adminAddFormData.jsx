import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const adminAddData = (newProduct) => [
  {
    id: "0",
    name: "title",
    value: newProduct.title,
    type: "text",
    placeholder: "Nom du produit",
    Icon: <FaHamburger />,
  },
  {
    id: "1",
    name: "imageSource",
    value: newProduct.imageSource,
    type: "text",
    placeholder: "Url de l'image",
    Icon: <BsFillCameraFill />,
  },
  {
    id: "2",
    name: "price",
    value: newProduct.price ? newProduct.price : "",
    type: "text",
    placeholder: "Prix",
    Icon: <MdOutlineEuro />,
  },
];
