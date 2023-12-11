import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { GoMegaphone } from "react-icons/go";

export const adminAddData = (newProduct) => [
  {
    id: "0",
    name: "title",
    value: newProduct.title,
    type: "text",
    placeholder: "Nom du produit",
    Icon: <FaHamburger className="icon" />,
  },
  {
    id: "1",
    name: "imageSource",
    value: newProduct.imageSource,
    type: "text",
    placeholder: "Url de l'image",
    Icon: <BsFillCameraFill className="icon" />,
  },
  {
    id: "2",
    name: "price",
    value: newProduct.price ? newProduct.price : "",
    type: "text",
    placeholder: "Prix",
    Icon: <MdOutlineEuro className="icon" />,
  },

  {
    id: "3",
    name: "isAvailable",
    value: newProduct.isAvailable,
    type: "button",
    placeholder: newProduct.isAvailable ? "En Stock" : "Non disponible",
    Icon: <FiPackage className="icon" />,
  },

  {
    id: "4",
    name: "isPublicised",
    value: newProduct.isPublicised,
    type: "button",
    placeholder: newProduct.isPublicised ? "Avec Pub" : "Sans Pub",
    Icon: <GoMegaphone className="icon" />,
  },
];
