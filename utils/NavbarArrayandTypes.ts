export interface NavbarItemType {
  label: string;
  href: string;
  isDropDown: boolean;
  dropDownData?: Array<NavbarItemType>;
}

export const NavbarArray: Array<NavbarItemType> = [
  {
    label: "Female",
    href: "/category/Female",
    isDropDown: true,
    dropDownData: [
      {
        label: "Dreses",
        href: "/category/Female/Dresse",
        isDropDown: false,

      },
      {
        label: "Shirts",
        href: "/category/Female/Shirts",
        isDropDown: false,
      },
      {
        label: "Jackets",
        href: "/category/Female/Jackets",
        isDropDown: false,
      },
      {
        label: "Pants",
        href: "/category/Female/Pants",
        isDropDown: false,
      },
      {
        label: "Jwellary",
        href: "/category/Female/Jwellary",
        isDropDown: false,
      },
    ],
  },

  {
    label: "Male",
    href: "/category/Male",
    isDropDown: true,
    dropDownData: [
        {
          label: "Shirts",
          href: "/category/Male/Shirts",
          isDropDown: false,
        },
        {
          label: "Shorts",
          href: "/category/Male/Shorts",
          isDropDown: false,
        },
        {
          label: "Jackets",
          href: "/category/Male/Jackets",
          isDropDown: false,
        },
        {
          label: "Pants",
          href: "/category/Male/Pants",
          isDropDown: false,
        },
    ],
  },

  {
    label: "Kids",
    href: "/category/Kids",
    isDropDown: true,
    dropDownData: [
        {
          label: "Dreses",
          href: "/category/Kids/Dresses",
          isDropDown: false,
  
        },
        {
          label: "Shirts",
          href: "/category/Kids/Shirts",
          isDropDown: false,
        },
        {
          label: "Jackets",
          href: "/category/Kids/Jackets",
          isDropDown: false,
        },
        {
          label: "Pants",
          href: "/category/Kids/Pants",
          isDropDown: false,
        },
    ],
  },

  {
    label: "All Products",
    href: "/products",
    isDropDown: false,
  },
];
