const text = "No Bem-Estar, acreditamos que a jornada em direção a uma vida mais saudável e equilibrada começa com pequenos passos. Nosso projeto é a chave para desbloquear o seu potencial de bem-estar. Monitorar o sono, a alimentação, o humor e a atividade física nunca foi tão fácil e eficaz. Escolher o Bem-Estar significa escolher a autenticidade, o apoio e as ferramentas necessárias para conquistar uma vida mais plena e saudável. Junte-se a nós e descubra como cada pequena mudança pode criar um impacto significativo no seu bem-estar geral."

const Why = () => {
    return (
        <div className="grid grid-cols-2">
            <div className="m-auto text-4xl font-bold w-1/3">
                Por que escolher o Bem-Estar?
            </div>
            <div className="grid grid-rows-2 gap-4 text-muted-foreground">
                <div className="mt-auto font-bold">
                    Transformando sua Vida, um Passo de Cada Vez
                </div>
                <div className="text-justify max-w-lg">
                    {text}
                </div>
            </div>
        </div>
    );
}

export default Why;