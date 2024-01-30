import { NavbarItemType } from "@/utils/NavbarArrayandTypes";
import { FC } from "react";
import Link from "next/link";

const DropDown: FC<{item: NavbarItemType}> = ({item}) => {
  return (
    <ul>
        {
            item.dropDownData?.map((item: NavbarItemType, index: number) => (
                <li className="hover:ml-2 group-hover:duration-300">
                    <Link href={item.href}>
                        {
                            item.label
                        }
                    </Link>
                </li>
            ))
        }
    </ul>
  )
}

export default DropDown