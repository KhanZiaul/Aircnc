import { Outlet } from "react-router-dom";
import Navigation from "../Pages/Shared/Navigation/Navigation";


const Main = () => {
  return (
    <div className="px-10 my-6">
      <Navigation></Navigation>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;