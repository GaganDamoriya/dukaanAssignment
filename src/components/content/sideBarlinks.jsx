import { FaHome } from "react-icons/fa";
import { IoHomeOutline, IoClipboardOutline } from "react-icons/io5";
import { CiDeliveryTruck, CiDiscount1 } from "react-icons/ci";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdOutlinePayments } from "react-icons/md";
import { PiSquaresFour } from "react-icons/pi";
import {
  BsCursor,
  BsPeople,
  BsLightning,
  BsBarChartLine,
} from "react-icons/bs";
import { TbBrandGravatar } from "react-icons/tb";

export const sidebarlinks = [
  {
    icon: <IoHomeOutline />,
    label: "Home",
  },
  {
    icon: <IoClipboardOutline />,
    label: "Orders",
  },
  {
    icon: <PiSquaresFour />,
    label: "Products",
  },
  {
    icon: <CiDeliveryTruck />,
    label: "Delivery",
  },
  {
    icon: <HiOutlineSpeakerphone />,
    label: "Marketing",
  },
  {
    icon: <BsBarChartLine />,
    label: "Analytics",
  },
  {
    icon: <MdOutlinePayments />,
    label: "Payment",
  },
  {
    icon: <BsCursor />,
    label: "Tools",
  },
  {
    icon: <CiDiscount1 />,
    label: "Discounts",
  },
  {
    icon: <BsPeople />,
    label: "Audience",
  },
  {
    icon: <TbBrandGravatar />,
    label: "Appearance",
  },
  {
    icon: <BsLightning />,
    label: "Plugins",
  },
];
