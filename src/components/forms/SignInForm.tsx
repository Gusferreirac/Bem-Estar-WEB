import { useState } from "react";
import { Button } from "../ui/button";
import api from "../lib/api";
import Cookies from "js-cookie";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const navigate = useNavigate();
    
    function styleError(error: string | null){
        return {
            border: error ? '1px solid red' : '',
        }
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        if(error) setError(null);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        if(error) setError(null);
    };

    async function handleGoogleLogin(response: any){
        const decodedResponse = jwt_decode(response.credential) as { email: string, sub: string };

        setEmail(decodedResponse.email);
        setPassword(decodedResponse.sub);

        const userData = {
            email: decodedResponse.email,
            password: decodedResponse.sub,
        };

        console.log(userData);
        
        try {
            const response = await api.post('/login', userData, {
                headers: {
                    'Content-Type': 'application/json', // Define o cabeçalho Content-Type como application/json
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

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        alert(clientId);
        
        
        const userData = {
            email,
            password,
        };
        
        try {
            const response = await api.post('/login', userData, {
                headers: {
                    'Content-Type': 'application/json' // Define o cabeçalho Content-Type como application/json
                }
            });
            
            // Verifique a resposta do servidor, redirecione se necessário
            if (response.status === 200) {
                const data = response.data;

                Cookies.set('token', data, { expires: 3 })
                window.location.href = '/home'; // Redireciona para a página inicial
            } else {
                console.error('Erro no servidor:', response.status);
            }
        } catch (error) {
            setError("Email ou senha incorretos");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
                <label htmlFor="email" className="flex text-gray-700 mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    required
                    name="email"
                    value={email}
                    style={styleError(error)}
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
                    required
                    name="password"
                    value={password}
                    style={styleError(error)}
                    onChange={handlePasswordChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <Button type="submit" className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                    Entrar
                </Button>
            </div>
            <div className="mb-4 text-red-600">{error}</div>
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
            <div className="text-muted-foreground text-sm">
                <p className="mb-2">Não possui conta? <a href="/cadastro" className="text-green-600 underline">Cadastre-se já!</a></p>
                <a href="" className="text-green-600 underline">Esqueci minha senha</a>
            </div>
        </form>
    );
};

export default SignInForm;
