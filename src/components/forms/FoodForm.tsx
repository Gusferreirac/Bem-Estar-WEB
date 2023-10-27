import { useState } from "react";
import { Button } from "../ui/button";
import api from "../lib/api";
import { getUser } from "../lib/auth";

import React from "react";

interface FoodFormProps {
    onClose: () => void;
}

const FoodForm: React.FC<FoodFormProps> = ({ onClose }) => {
    const [description, setDescriptionName] = useState("");
    const [start, setStart] = useState("");
    const [photo, setPhoto] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const id = getUser().sub

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescriptionName(event.target.value);
    };

    const handleStartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStart(event.target.value);
    };

    const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.currentTarget.files;
        if (files) {
            const reader = new FileReader();
            reader.readAsDataURL(files[0] as Blob);

            reader.onload= function () {
                const photoDataURL = reader.result as string;
                setPhoto(photoDataURL);
            }
        }
    };


    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        
        const userData = {
            date: new Date(start),
            description: description,
            userId: id,
            photo: photo
        };
        
        
        try {
            setLoading(true);
            const response = await api.post('/food-register', userData, {
                headers: {
                    'Content-Type': 'application/json' // Define o cabeçalho Content-Type como application/json
                }
            });
            
            // Verifique a resposta do servidor, redirecione se necessário
            if (response.status === 200) {
                onClose()
                alert("Alimentação cadastrada com sucesso!")
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
                <label htmlFor="description" className="flex text-gray-700 mb-2">
                    Descrição
                </label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    required
                    value={description}
                    onChange={handleDescriptionChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
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
                <label htmlFor="photo" className="flex text-gray-700 mb-2">
                    Foto
                </label>
                <input
                    type="file"
                    id="photo"
                    name="photo"
                    required
                    onChange={handlePhotoChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                {!loading ?
                <Button type="submit" className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                    Cadastrar alimentação
                </Button>
                : loading ?
                    <Button disabled type="submit" className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                        Cadastrar alimentação
                    </Button>
                : null}
            </div>
        
        </form>
    );
};

export default FoodForm;
