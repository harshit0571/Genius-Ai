import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export const Mobile_Sidebar = () => {
  return (
    <Button variant="ghost" size="icon" className="md:hidden">
      <Menu />
    </Button>
  );
};
