import { useState } from "react";
import { Button } from "../ui/button";
import StarRating from "../misc/StarRating";
import { WakeFeeling } from "../misc/WakeFeeling";
import api from "../lib/api";
import { getUser } from "../lib/auth";

interface SleepFormProps {
    onClose: () => void;
}

const SleepForm: React.FC<SleepFormProps> = ({ onClose }) => {
    const [start, setStart] = useState<string>("");
    const [end, setEnd] = useState<string>("");
    const [feeling, setFeeling] = useState("normal");
    const [selectedStars, setSelectedStars] = useState(0);
    const [loading, setLoading] = useState(false);
    const id = getUser().sub

    // Função de retorno para receber o número de estrelas selecionadas
    const handleRatingChange = (newRating: number) => {
        setSelectedStars(newRating);
    };

    // Função de retorno para receber o valor do WakeFeeling
    const handleFeelingChange = (newValue: string) => {
      setFeeling(newValue);
    };

    const handleStartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStart(event.target.value);
    };

    const handleEndChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnd(event.target.value);
    };

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();

        const userData = {
            startTime: new Date(start),
            endTime: new Date(end),
            rating: selectedStars,
            feeling: feeling,
            userId: id,
        };
        
        try {
            setLoading(true);
            const response = await api.post('/sleep-register', userData, {
                headers: {
                    'Content-Type': 'application/json' // Define o cabeçalho Content-Type como application/json
                }
            });
            
            // Verifique a resposta do servidor, redirecione se necessário
            if (response.status === 200) {
                onClose()
                alert("Sono cadastrada com sucesso!")
            } else {
                console.error('Erro no servidor:', response.status);
            }
        } catch (error) {
            console.error('Erro no servidor:', error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
                <label htmlFor="start" className="flex text-gray-700 mb-2">
                    Horário em que dormiu
                </label>
                <input
                    type="datetime-local"
                    id="start"
                    name="start"
                    required
                    value={start}
                    onChange={handleStartChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="end" className="flex text-gray-700 mb-2">
                    Horário em que acordou
                </label>
                <input
                    type="datetime-local"
                    id="end"
                    name="end"
                    required
                    value={end}
                    onChange={handleEndChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <label className="flex text-gray-700 mb-2">
                    Classifique seu sono:
            </label>
            <StarRating onRatingChange={handleRatingChange}/>
            <label className="flex text-gray-700 mb-2">
                    Como você acordou hoje?
            </label>
            {/* TODO: Pegar dados star rating e wakefeeling */}
            <WakeFeeling onFeelingChange={handleFeelingChange}/>
            <div className="mb-4">
            {!loading ?
                <Button type="submit" className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                    Cadastrar sono
                </Button>
                : loading ?
                    <Button disabled type="submit" className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                        Cadastrar sono
                    </Button>
                : null}
            </div>
        
        </form>
    );
};

export default SleepForm;