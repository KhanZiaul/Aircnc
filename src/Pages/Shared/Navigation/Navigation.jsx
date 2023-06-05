import Logo from "./Logo";
import MenuDropdown from "./MenuDropdown";
import Search from "./Search";


const Navigation = () => {
    return (
        <div className="flex justify-between">
            <Logo></Logo>
            <Search></Search>
            <MenuDropdown></MenuDropdown>
        </div>
    );
};

export default Navigation;