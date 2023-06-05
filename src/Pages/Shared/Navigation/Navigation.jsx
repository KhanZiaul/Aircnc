import Logo from "./Logo";
import MenuDropdown from "./MenuDropdown";
import Search from "./Search";


const Navigation = () => {
    return (
        <div className="flext justify-between">
            <Logo></Logo>
            <Search></Search>
            <MenuDropdown></MenuDropdown>
        </div>
    );
};

export default Navigation;