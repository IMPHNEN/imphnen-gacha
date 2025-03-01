import { Navbar } from "@/components/ui/molecules/navbar";
import { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";

export const AppLayout: FC = (): ReactElement => {
  return (
    <main className="bg-primary-50 min-h-screen px-20 py-[60px]">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default AppLayout;
