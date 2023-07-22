import {LuMenu} from "react-icons/lu";

const navItemsClasses:string = "hidden md:inline-flex items-center px-2 cursor-pointer h-8 border border-transparent hover:border-white duration-300";

const BottomHeader = () => {
    return (
    <div className="w-full h-10 bg-amazon_light text-white px-4 flex items-center">
        <p className="flex items-center px-2 text-xl gap-1 cursor-pointer h-8 border border-transparent hover:border-white duration-300">
            <LuMenu /> All
        </p>
        <p className={navItemsClasses}>Todays Deals</p>
        <p className={navItemsClasses}>Customer Service</p>
        <p className={navItemsClasses}>Registry</p>
        <p className={navItemsClasses}>Gift Cards</p>
        <p className={navItemsClasses+"hover:border-red-600 text-amazon_yellow hover:text-red-400"}>Sign Out</p>
    </div>
  )
}

export default BottomHeader;