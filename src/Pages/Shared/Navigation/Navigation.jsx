import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";


const Navigation = () => {
    return (
        <div className="flext justify-between">
            <Logo></Logo>
            <Search></Search>
            <Menu></Menu>
        </div>
    );
};

export default Navigation;