"use client"

import * as React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "../ui/button";
import { getUser } from "../lib/auth";
import api from "../lib/api";

export function FinishRegister() {
  const [bornDate, setDate] = React.useState("")
  const state = useLocation();
  const navigate = useNavigate();
  const id = getUser().sub

    const handleBornDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
    };

    async function handleSubmit() {
        const userData = {
            userId: id,
            bornDate: new Date(bornDate),
        };
       
        try {
            const response = await api.put('/register', userData, {
                headers: {
                    'Content-Type': 'application/json' // Define o cabeçalho Content-Type como application/json
                }
            });
            
            // Verifique a resposta do servidor, redirecione se necessário
            if (response.status === 200) {
                navigate('/home'); 
            } else {
                console.error('Erro no servidor:', response.status);
            }
        } catch (error) {
            console.error('Erro no servidor:', error);
        }
    }

  React.useEffect(() => {
    if (!state.state) {
        navigate('/'); // Ou renderize uma mensagem alternativa
    }
  });

  return (
    <div className="text-center min-h-screen flex items-center justify-center flex-col"> {/* Classes para centralizar */}
        <h1 className="text-2xl font-bold mb-4">Insira sua data de nascimento para concluir o cadastro</h1>
        <input
            type="date"
            id="born-date"
            name="born-date"
            value={bornDate}
            onChange={handleBornDateChange}
            className="border-green-600 border-2 rounded-lg"
        />
        <Button 
            type="submit" 
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-800 mt-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-[50%]">
            Cadastrar
        </Button>
    </div>
  )
}