import { UserButton } from "@clerk/nextjs";
import { Mobile_Sidebar } from "./Mobile_Sidebar";

const NavBar = () => {
  return (
    <div className="flex items-center p-4">
      <Mobile_Sidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default NavBar;
