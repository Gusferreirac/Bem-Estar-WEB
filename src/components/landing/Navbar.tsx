
import Nav from "./Navlinks";
import { Apple } from "lucide-react";

interface NavType{
    type: string;
    isHome: boolean;
}

const Navbar = (props: NavType) => {
    const page = window.location.pathname;

    return (
        <header className="top-0 relative overflow-hidden text-white z-[20] mx-auto flex-wrap flex w-full items-center justify-between border-gray-400 p-8">
            <a href="/" className="flex gap-2">
                <Apple className="m-auto text-green-600"/>
                <h1 className="font-bold text-green-600 text-2xl">Bem-Estar</h1>
            </a>
            {page != '/' ?
                <img className='absolute w-2/3 right-0' src="https://res.cloudinary.com/dbqgpezvw/image/upload/v1698382220/bem-estar/assets/backgrounds/ko35qpnfziiexpmhfdll.svg" alt="" />
            : null}
            <Nav type={props.type} isHome={props.isHome}/>
            
        </header>
    );
}
export default Navbar;
