import { useState } from "react";
import { Button } from "../ui/button";
import api from "../lib/api";
import { getUser } from "../lib/auth";

import React from "react";

interface HumorFormProps {
    onClose: () => void;
}

const HumorForm: React.FC<HumorFormProps> = ({ onClose }) => {
    const [feeling, setFeelingName] = useState("");
    const [start, setStart] = useState("");
    const id = getUser().sub

    const handleFeelingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFeelingName(event.target.value);
    };

    const handleStartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStart(event.target.value);
    };


    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        
        const userData = {
            date: new Date(start),
            feeling: feeling,
            userId: id,
        };
        
        
        try {
            const response = await api.post('/humor-register', userData, {
                headers: {
                    'Content-Type': 'application/json' // Define o cabeçalho Content-Type como application/json
                }
            });
            
            // Verifique a resposta do servidor, redirecione se necessário
            if (response.status === 200) {
                onClose()
                alert("Humor cadastrado com sucesso!")
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
                    Data
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
                <label htmlFor="feeling" className="flex text-gray-700 mb-2">
                    Como está se sentindo?
                </label>
                <input
                    type="text"
                    id="feeling"
                    name="feeling"
                    required
                    value={feeling}
                    onChange={handleFeelingChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <Button type="submit" className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                    Cadastrar alimentação
                </Button>
            </div>
        
        </form>
    );
};

export default HumorForm;
