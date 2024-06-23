import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { FC } from "react";

type MenuProps = {
  menuName: string;
  path: string;
  Icon: React.ElementType;
};

const Menu: FC<MenuProps> = ({ menuName, path, Icon }) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      className={`flex items-center gap-3 py-2 pl-3 cursor-pointer ${
        isActive
          ? "bg-gray-300 dark:bg-gray-400"
          : "bg-gray-200  hover:bg-gray-300 "
      }`}
      href={path}
    >
      <Icon
        className={`text-[18px] ${
          isActive
            ? "text-gray-900 dark:text-gray-100"
            : "text-gray-700 dark:text-gray-400"
        }`}
      />
      <h1
        className={`text-[14px] font-bold ${
          isActive
            ? "text-gray-900 dark:text-gray-100"
            : "text-gray-700 dark:text-gray-400"
        }`}
      >
        {menuName}
      </h1>
    </Link>
  );
};

export default Menu;
