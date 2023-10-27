import { useState } from "react";
import { Button } from "../ui/button";
import { getUser } from "../lib/auth";
import api from "../lib/api";

interface ActivityFormProps {
    onClose: () => void;
}

const ActivityForm: React.FC<ActivityFormProps> = ({ onClose })=> {
    const [activityName, setActivityName] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const id = getUser().sub

    const handleActivityNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setActivityName(event.target.value);
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
            name: activityName,
            startTime: new Date(start),
            endTime: new Date(end),
            userId: id,
        };
       
        try {
            const response = await api.post('/activity-register', userData, {
                headers: {
                    'Content-Type': 'application/json' // Define o cabeçalho Content-Type como application/json
                }
            });
            
            // Verifique a resposta do servidor, redirecione se necessário
            if (response.status === 200) {
                onClose()
                alert("Atividade cadastrada com sucesso!")
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
                <label htmlFor="activityName" className="flex text-gray-700 mb-2">
                    Nome da atividade
                </label>
                <input
                    type="text"
                    id="activityName"
                    name="activityName"
                    required
                    value={activityName}
                    onChange={handleActivityNameChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="start" className="flex text-gray-700 mb-2">
                    Início da atividade
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
                    Término da atividade
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
            <div className="mb-4">
                <Button type="submit" className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                    Cadastrar atividade
                </Button>
            </div>
        
        </form>
    );
};

export default ActivityForm;
