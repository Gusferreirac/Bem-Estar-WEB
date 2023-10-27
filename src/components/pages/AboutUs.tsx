import Footer from "../landing/Footer";
import Join from "../landing/Join";
import Navbar from "../landing/Navbar";

const AboutPage = () => {
    const aboutText= `
        Bem-vindo ao "Bem-Estar", um projeto inspirado pela busca incessante de uma vida saudável e equilibrada. Nossa jornada começou com um grupo de entusiastas da saúde e do bem-estar que acreditam que todos merecem a oportunidade de cuidar de sua saúde de maneira acessível e eficaz.
        Nossa visão é simples: capacitar você a tomar o controle de sua saúde e qualidade de vida. Acreditamos que pequenas mudanças podem ter um impacto significativo. É por isso que criamos o aplicativo "Bem-Estar", uma ferramenta intuitiva e personalizável para acompanhar seus dados de alimentação, sono e atividade física.
        Nossa equipe é composta por indivíduos dedicados, incluindo desenvolvedores, designers e profissionais de saúde, todos comprometidos em tornar sua jornada em busca do bem-estar o mais fácil e gratificante possível.
        Aqui no "Bem-Estar", acreditamos que a saúde é mais do que apenas um número na balança. É sobre se sentir bem, ter energia, dormir bem e desfrutar de uma vida plena. Nosso aplicativo é projetado para ajudá-lo a atingir esses objetivos, não importa onde você esteja em sua jornada de bem-estar.
        Mas "Bem-Estar" é mais do que apenas um aplicativo; é uma comunidade. Estamos aqui para apoiá-lo, para compartilhar conhecimento e para inspirá-lo. Acreditamos que juntos podemos criar um mundo mais saudável e feliz.
        Junte-se a nós nesta jornada emocionante em direção a uma vida mais saudável e equilibrada. Seja parte do movimento "Bem-Estar" e comece a escrever sua própria história de transformação. O futuro é promissor, e estamos ansiosos para compartilhá-lo com você.
        Bem-vindo ao "Bem-Estar" - onde sua saúde e bem-estar são nossa prioridade número um.
    `

return(
    <main className='min-h-screen'>
      <div className='relative overflow-hidden'>
        <img className='absolute z-0 w-3/4 right-0' src="src/assets/backgrounds/bg_top.svg" alt="" />
        <div className='z-10 relative'>
          <Navbar type="header" isHome={false}/> 
        </div>
      </div>
      <div>
        <div className="mt-10 mb-20 text-justify w-2/3 m-auto text-lg">
            <h1 className="text-4xl font-bold mb-10">Sobre <span className="text-green-600">nós</span></h1>
            <span>{aboutText}</span>
        </div>
      </div>
        <div className='mb-40'>
          <Join/>
        </div>
      <Footer/>
    </main>
    );
}  

export default AboutPage;