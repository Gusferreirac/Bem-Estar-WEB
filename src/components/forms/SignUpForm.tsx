import { useState } from "react";
import { Button } from "../ui/button";
import api from "../lib/api";
import Cookies from "js-cookie";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';


const SignUpForm = () => {
    const [name, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [bornDate, setBornDate] = useState("");
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const navigate = useNavigate();

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleBornDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBornDate(event.target.value);
    };

    async function handleGoogleResponse(response: any){
        const decodedResponse = jwt_decode(response.credential) as { name: string, email: string, sub: string };

        setFullName(decodedResponse.name);
        setEmail(decodedResponse.email);
        setPassword(decodedResponse.sub);

        const userData = {
            name: decodedResponse.name,
            email: decodedResponse.email,
            password: decodedResponse.sub,
        };


        try {
            const response = await api.post('/register', userData, {
                headers: {
                    'Content-Type': 'application/json', // Define o cabeçalho Content-Type como application/json
                }
            });            

            // Verifique a resposta do servidor, redirecione se necessário
            if (response.status === 200) {
                const data = response.data;

                Cookies.set('token', data, { expires: 3 })

                navigate('/terminar_cadastro'); // Redireciona para a página inicial
            } else {
                console.error('Erro no servidor:', response.status);
            }
        } catch (error) {
            // Trate erros aqui
            console.error(error);
        }
    }

    async function handleGoogleLogin(response: any){
        await handleGoogleResponse(response);
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const userData = {
            name,
            email,
            password,
            bornDate: new Date(bornDate)
        };

        try {
            const response = await api.post('/register', userData, {
                headers: {
                    'Content-Type': 'application/json' // Define o cabeçalho Content-Type como application/json
                }
            });
            
            // Verifique a resposta do servidor, redirecione se necessário
            if (response.status === 200) {
                const data = response.data;

                Cookies.set('token', data, { expires: 3 })

                navigate('/home'); // Redireciona para a página inicial
            } else {
                console.error('Erro no servidor:', response.status);
            }
        } catch (error) {
            // Trate erros aqui
            console.error(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
                <label htmlFor="full-name" className="flex text-gray-700 mb-2">
                    Nome
                </label>
                <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    required
                    value={name}
                    onChange={handleNameChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="flex text-gray-700 mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="flex text-gray-700 mb-2">
                    Senha
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="born-date" className="flex text-gray-700 mb-2">
                    Data de nascimento
                </label>
                <input
                    type="date"
                    id="born-date"
                    name="born-date"
                    required
                    value={bornDate}
                    onChange={handleBornDateChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <Button type="submit" className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                    Cadastrar
                </Button>
            </div>
            <hr className="my-6"/>
            <div className="mb-4">
                <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin    
                    onSuccess={credentialResponse => {
                        handleGoogleLogin(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
                </GoogleOAuthProvider>
            </div>
        </form>
    );
};

export default SignUpForm;
