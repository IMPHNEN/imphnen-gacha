import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

export const Navbar: FC = (): ReactElement => {
  return (
    <header className="bg-white shadow-sm rounded-lg min-h-[71px] max-h-[71px] flex justify-between w-full">
      <div className="flex w-full items-center justify-between px-6 py-3">
        <div className="flex items-center">
          <img src="/logos/simple.svg" alt="IMPHNEN Logo" className="h-8 w-auto" />
        </div>

        <nav className="w-full flex justify-end">
          <ul className="flex items-center gap-x-8 font-semibold">
            <li>
              <Link to="#" className="text-primary-500 hover:text-primary-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 transition-colors">
                Merch Gacha
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
