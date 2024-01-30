import { FC, useState } from "react";
import Link from "next/link";
import { NavbarArray, NavbarItemType } from "@/utils/NavbarArrayandTypes";
import { HiOutlineChevronDown } from "react-icons/hi";
import DropDown from "@/components/DropDown";

const Expand: FC<{ item: NavbarItemType }> = ({ item }) => {
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const [isTimeOut, setTimeOut] = useState<boolean>(false);

  function handleExpand() {
    setExpanded(!isExpanded);
    setTimeout(() => {
      setTimeOut(!isTimeOut);
    }, 500);
  }

  return (
    <li
      className={`${isExpanded ? "h-44" : "h-12"} hover:bg-gray-200 list-none`}
    >
      <div
        onClick={handleExpand}
        className="flex justify-center font-semibold mb-1"
      >
        <a>{item.label}</a>
        {item.isDropDown ? (
          <HiOutlineChevronDown className="-rotate-180 group-hover:rotate-0 duration-300" />
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col space-y-1 text-center">
        {isExpanded &&
        <DropDown item={item} />
        //   item.dropDownData?.map((subitem: NavbarItemType, index: number) => (
        //     <Link className="duration-300" href={subitem.href}>
        //       {subitem.label}
        //     </Link>
        //   ))
        }
      </div>
    </li>
  );
};

export default Expand;
