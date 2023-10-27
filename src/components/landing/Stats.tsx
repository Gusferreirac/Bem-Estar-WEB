import { useSpring, animated } from "react-spring";

interface NumberProps {
    n: number;
}

const Number = ({ n }: NumberProps) => {
    const {number} = useSpring({
        number: n,
        from: { number: 0 },
        delay: 200,
        config: { mass: 1, tension: 30, friction: 14},
    });

    return (
        <animated.span>
            {number.to((n) => n.toFixed(0))}
        </animated.span>
    );
}



const Stats = () => {
    return (
        <div className="w-2/3 mx-auto"> {/* Adicionando 'mx-auto' para centralizar na horizontal */}
            <h2 className="text-4xl w-1/3 font-bold">A <span className="text-green-600">importância</span> de se preocupar com o bem-estar:</h2>
            <div className="grid grid-cols-3 text-center mt-20">
                <div>
                    <h3 className="font-bold text-5xl text-green-600 mb-4"><Number n={72}/>%</h3>
                    <span className="text-lg">dos brasileiros sofrem com doenças relacionadas ao <span className="text-green-600">sono</span></span>
                </div>
                <div className="ring-animation">
                    <h3 className="font-bold text-5xl text-green-600 mb-4"><Number n={70}/>%</h3>
                    <span className="text-lg">dos brasileiros não praticam o nível recomendado de <span className="text-green-600">atividade física</span></span>
                </div>
                <div className="ring-animation">
                    <h3 className="font-bold text-5xl text-green-600 mb-4"><Number n={34}/>%</h3>
                    <span className=" text-lg">dos brasileiros consideram seu  <span className="text-green-600">estado de saúde</span> regular ou ruim</span>
                </div>
            </div>
            <span className="float-right text-muted-foreground mt-8">*Segundo dados do IBGE e Fiocruz</span>
        </div>
    );
};

export default Stats;
