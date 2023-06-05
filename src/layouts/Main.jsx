import { Outlet } from "react-router-dom";
import Navigation from "../Pages/Shared/Navigation/Navigation";
import Footer from "../Pages/Shared/Footer/Footer";


const Main = () => {
  return (
    <div className="px-10 my-6">
      <Navigation></Navigation>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;