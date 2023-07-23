import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const DashBoardPage = () => {
  return (
    <div>
      <p>Dashboard</p>
    </div>
  );
};

DashBoardPage.getInitialProps = async (ctx: any) => {
  return {};
};

export default DashBoardPage;
