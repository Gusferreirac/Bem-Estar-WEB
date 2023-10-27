import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '../ui/button';
import { Apple, Bed, Dumbbell, Laugh } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type CardStyleProps = {
    icon: string;
    keyWord: string;
    content: string;
}


// Componente CardStyle
const CardStyle = ({icon, keyWord, content }: CardStyleProps) => {
    const navigate = useNavigate();

    const redirectPage = () => {
        navigate(
            '/servicos',
            {
                state: {
                    id: icon,
                },
            }
        );
    }


    return (
        <Card className='max-w-md min-h-[400px]'>
            {
            icon ==   'dumbbell' ? <Dumbbell className="m-auto mt-4 h-8 w-8 text-green-600"/>
            : icon ==   'bed' ? <Bed className="m-auto mt-4 h-8 w-8 text-green-600"/>
            : icon ==   'apple' ? <Apple className="m-auto mt-4 h-8 w-8 text-green-600"/>
            : icon ==   'laugh' ? <Laugh className="m-auto mt-4 h-8 w-8 text-green-600"/>
            : null}
            <CardHeader className='text-center text-xl'>
                <CardTitle>Moderador de <span className='text-green-500 underline'> {keyWord} </span></CardTitle>
            </CardHeader>
            <CardContent className='text-justify'>
                <p>{content}</p>
            </CardContent>
            <CardFooter className='flex'>
              <Button className='w-full' onClick={redirectPage}>Saiba Mais</Button>
            </CardFooter>
        </Card>
    );
};


const Services = () => {
    return (
        <div className='mt-20'>
            <div className='text-center font-bold text-4xl mb-10 text-green-600'>
                <h1>Nossos serviços</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 m-auto w-fit">
                <CardStyle
                    icon='bed'
                    keyWord="Sono"
                    content="Tenha um sono de qualidade! Registre seu sono, analise padrões e receba dicas personalizadas para melhorar suas noites. Durma melhor, viva melhor com o nosso Medidor de Sono."
                />
                <CardStyle
                    icon='dumbbell'
                    keyWord="Atividade Física"
                    content="Mantenha-se ativo, fique saudável! Registre suas atividades diárias, defina metas e acompanhe seu progresso. O Medidor de Atividade Física é seu parceiro para um estilo de vida mais ativo."
                />
                <CardStyle
                    icon='laugh'
                    keyWord="Humor"
                    content="Um dia de cada vez! Registre seu humor diariamente, identifique tendências e descubra o que afeta seu estado emocional. Use o Medidor de Humor para encontrar equilíbrio e bem-estar."
                />
                <CardStyle
                    icon='apple'
                    keyWord="Alimentação"
                    content="Nutrição saudável, vida saudável! Registre sua alimentação, acompanhe calorias, nutrientes e estabeleça metas de dieta. O Medidor de Alimentação é seu guia para escolhas alimentares conscientes."
                />
            </div>
        </div>
    );
};

export default Services;
