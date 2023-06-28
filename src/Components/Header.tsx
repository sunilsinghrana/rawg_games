import logo from "../assets/Images/lgog.png";
import searchIcon from "../assets/icons8-search-24.png";
import dropdownIcon from "../assets/Images/icons8-down-48.png";
import moonIcon from "../assets/Images/icons8-moon-60.png";
import sunIcon from "../assets/Images/icons8-sun-50.png"
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
    const {theme, setTheme} = useContext(ThemeContext)
  return (
    <div className="flex justify-around items-center">
      <img src={logo} width={60} height={60} />

      <div className={`flex dark:bg-[#3B3B3B] bg-[#eee] p-2 w-[75%] items-center rounded-xl sm:mx-2 lg:mx-1`}>
        <img src={searchIcon} width={20} height={20} />
        <input
          type="text"
          className="ml-2 text-white bg-transparent outline-none w-full"
          placeholder="Search here...."
        />
      </div>

      <div className={`w-10 h-10 flex justify-center items-center cursor-pointer rounded-full dark:bg-[#3B3B3B] bg-[#eee] lg:mx-1 md:mx-2`}>
        {theme=='light' ?
        <img src={moonIcon} width={30} height={30} onClick={()=> {setTheme('dark');localStorage.setItem('theme', 'dark')}} /> :
        <img src={sunIcon} width={30} height={30} onClick={()=> {setTheme('light');localStorage.setItem('theme', 'light')}} />
        }
      </div>

      <div className="md:flex md:justify-between md:items-center max-[805px]:hidden lg:mx-1 md:mx-2">
        <img
          className="cursor-pointer"
          width="36"
          height="36"
          src="https://img.icons8.com/color/48/user-male-circle--v1.png"
          alt="user-male-circle--v1"
        />
        <p className={`dark:text-white text-black px-[0.7rem] cursor-pointer`}>John Doe</p>
        <img
          src={dropdownIcon}
          width={15}
          height={15}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Header;
