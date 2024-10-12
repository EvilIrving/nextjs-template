import { useState } from "react";

import { headerConfig } from "@/data.config";
import { Link } from "@/i18n.config";
interface MenuItem {
  label: string;
  href: string;
  subItems?: MenuItem[];
}

const MenuNav: React.FC = () => {
  const { links } = headerConfig;
  return (
    <nav>
      <ul className="flex items-center justify-center">
        {links.map((item) => (
          <MenuItemComponent key={item.label} item={item} />
        ))}
      </ul>
    </nav>
  );
};

interface MenuItemComponentProps {
  item: MenuItem;
}

const MenuItemComponent: React.FC<MenuItemComponentProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li
      className="group relative px-4 py-2"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link href={item.href}>
        <span className="flex py-2 text-lg font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary lg:ml-2 lg:inline-flex lg:py-5 xl:ml-3 2xl:ml-3">
          {item.label}
        </span>
      </Link>

      {item.subItems && (
        <ul
          className={`absolute left-0 z-50 mt-2 w-64 rounded-lg border bg-white p-2 shadow-lg transition-opacity duration-200 ${
            isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          {item.subItems.map((subItem) => (
            <li key={subItem.label}>
              <Link href={subItem.href}>
                <span className="ud-menu-scroll flex py-2 text-lg font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary lg:ml-5 lg:inline-flex lg:py-3 xl:ml-5 2xl:ml-7">
                  {subItem.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuNav;
