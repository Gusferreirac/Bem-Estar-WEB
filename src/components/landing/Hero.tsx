import { Button } from "@/components/ui/button"
import Cookies from 'js-cookie';
import { getUser } from "../lib/auth";

const Hero = () => {
    const isLooged = Cookies.get('token');
    const name = isLooged ? getUser().name.split(" ")[0] : null; //Split para aparecer somente o primeiro nome

    return (
        <div className="grid grid-cols-2 mt-20">
            {name ? 
                <div className="text-justify m-auto max-w-lg">
                <h1 className="text-3xl font-bold text-green-600 mb-10">Bem-Vindo de volta {name}!</h1>
                <p>Continue acompanhando seu sono, alimentação, humor e atividade física de forma simples e eficaz. Mantenha o foco nas pequenas mudanças diárias que estão impulsionando sua jornada de bem-estar. Você já está investindo em si mesmo, e o futuro do seu bem-estar continua a evoluir. Continue assim e celebre o progresso que você está fazendo!</p>
                <a href="/home"><Button className="bg-green-600 w-full h-10 mt-10 text-white font-bold rounded">Acessar Bem-Estar</Button></a>
            </div>          
            : 
                <div className="text-justify m-auto max-w-lg">
                    <h1 className="text-3xl font-bold text-green-600 mb-10">Bem-Vindo ao Seu Futuro de Bem-Estar!</h1>
                    <p>No Projeto Bem-Estar, estamos aqui para guiar você em direção a uma vida mais saudável e equilibrada. Acompanhe seu sono, sua alimentação, seu humor e sua atividade física de forma simples e eficaz. Descubra o poder de pequenas mudanças diárias e comece a investir em você mesmo. O futuro do seu bem-estar começa agora.</p>
                    <a href="/cadastro"><Button className="bg-green-600 w-full h-10 mt-10 text-white font-bold rounded">Comece Agora</Button></a>
                </div>
            }
            
            <div>
                <img src="src/assets/old_man.svg" className="max-w-full m-auto" alt="Hero" />
            </div>
        </div>
    );
};

export default Hero;
