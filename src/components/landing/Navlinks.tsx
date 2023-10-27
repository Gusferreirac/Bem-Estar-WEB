import { useState } from "react";
import {Menu, X}  from "lucide-react";
import { Button } from "../ui/button";
import { getUser } from "../lib/auth";
import Profile from "../misc/Profile";
import Cookies from 'js-cookie';

interface NavType{
    type: string;
    isHome: boolean
}

const Nav = (props: NavType) => {
    const [isOpen, setIsOpen] = useState(false);
    const isLooged = Cookies.get('token');
    const name = isLooged ? getUser().name : null;
    
    const toggleNavbar = () => setIsOpen(!isOpen);

    //console.log(props.isHome);

    return(
        <>
        <div className="hidden md:flex grid grid-cols-2 gap-4 relative overflow-hidden">
            {!props.isHome ? 
                <div className="grid grid-cols-3 gap-4 underline mt-auto mb-auto">
                    <a href="\historia" className="hover:text-green-200">História</a>
                    <a href="\sobre" className="hover:text-green-200">Sobre nós</a>
                    <a href="\servicos" className="hover:text-green-200">Serviços</a>
                </div>
            : null}
            {props.type == 'header'? 
                name ? ( // Verifique se 'name' está definido (usuário logado)
                    <div className="flex">
                        {!props.isHome? 
                            <a href="/home"><Button className="bg-white mr-4 ml-8 text-green-600 rounded-full hover:bg-transparent hover:text-white border-white border-2">Acessar Bem-Estar</Button></a>
                        : null}  
                        <Profile name={name}/>
                    </div>
                ) : (
                    <div className="ml-8">
                    <a href="/entrar"><Button variant="ghost" className="mr-2 rounded-full hover:text-green-600">Login</Button></a>
                    <a href="/cadastro"><Button className="bg-white text-green-600 rounded-full hover:bg-transparent hover:text-white border-white border-2">Cadastro</Button></a>
                    </div>
                )
            : null }
        </div>
        <div className="md:hidden">
                <button onClick={toggleNavbar}>
                    {isOpen ? <X /> : <Menu />}
                </button>
        </div>
        {isOpen && (
            <div className="flex flex-col items-center basis-full text-center">
               <a href="\historia" className="underline">História</a>
                    <a href="\sobre" className="underline">Sobre nós</a>
                    <a href="\servicos" className="underline">Serviços</a>
                <Button className="bg-white mt-4 mb-2 text-green-600 rounded-full hover:bg-transparent hover:text-white border-white border-2"><a href="/entrar">Login</a></Button>
                <Button className="bg-white text-green-600 rounded-full hover:bg-transparent hover:text-white border-white border-2"><a href="/cadastro">Cadastro</a></Button>
            </div>
        )} 
        </>
    );
}

export default Nav;