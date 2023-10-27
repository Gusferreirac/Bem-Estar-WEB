import { Apple, Bed, Dumbbell, Laugh } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card";


type CardStyleProps = {
    title: string;
    content: string;
    onClick: () => void;
    onList: () => void;
};

const CardStyle = ({ title, content, onClick, onList }: CardStyleProps) => {
    return (
    <Card className='max-w-md min-h-[400px] relative'>
        {
        title == "Atividade" ? <Dumbbell className="m-auto mt-4 h-8 w-8 text-green-600"/>
        :title == "Sono" ? <Bed className="m-auto mt-4 h-8 w-8 text-green-600"/>
        :title == "Alimentação" ? <Apple className="m-auto mt-4 h-8 w-8 text-green-600"/>
        :title == "Humor" ? <Laugh className="m-auto mt-4 h-8 w-8 text-green-600"/>
        : null}
        <CardHeader className='text-center text-xl flex'>
            <CardTitle><span className='text-green-500 underline'> {title} </span></CardTitle>
        </CardHeader>
        <CardContent className='text-justify flex'>
            <p>{content}</p>
        </CardContent>
        <CardFooter>
            <div className="text-center grid grid-rows-2 gap-4 m-auto">
                <Button className='w-full' onClick={onClick}>Cadastrar {title}</Button>
                <Button 
                    variant={"ghost"} 
                    onClick={onList}
                className="text-green-600 underline" >Listar histórico de {title}</Button>
            </div>
        </CardFooter>
    </Card>
    );
};

export default CardStyle;
