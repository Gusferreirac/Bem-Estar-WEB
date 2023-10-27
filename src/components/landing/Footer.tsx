import Nav from "./Navlinks";
import { Apple } from "lucide-react";

const Footer = () => {
    return (
        <header className="bg-green-900 text-white bootom-0 z-[20] mx-auto flex-wrap flex w-full items-center justify-between border-gray-400 p-8">
            <div className="flex gap-2">
                <Apple className="m-auto"/>
                <h1 className="font-bold text-2xl">Bem-Estar</h1>
            </div>
            <Nav type="footer" isHome={false}/>
            <p>© 2023 Bem-Estar. Todos direitos reservados.</p>
        </header>
    );
}
export default Footer;
