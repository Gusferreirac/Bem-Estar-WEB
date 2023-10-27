import Footer from "../landing/Footer";
import Join from "../landing/Join";
import Navbar from "../landing/Navbar";

const HistoryPage = () => {
    const historyText= `
        Havia um grupo de entusiastas da saúde e bem-estar com uma visão: proporcionar a todos as ferramentas necessárias para cuidar de sua saúde. Assim, surgiu o projeto "Bem-Estar".
        Esta ideia nasceu em uma conversa entre amigos, que compartilhavam desafios para manter um estilo de vida saudável. Eles decidiram criar uma plataforma que permitisse às pessoas acompanhar seus dados de alimentação, sono e atividade física de forma simples e eficaz.
        Uma equipe talentosa de desenvolvedores, designers e profissionais de saúde uniu forças. Eles trabalharam incansavelmente para dar vida ao aplicativo "Bem-Estar". O aplicativo se tornou uma ferramenta intuitiva e personalizável para melhorar a saúde em várias dimensões.
        O aplicativo foi lançado e as histórias de transformação começaram a surgir. Pessoas de todas as origens compartilharam como o "Bem-Estar" as ajudou a melhorar sua alimentação, sono e atividade física.
        O "Bem-Estar" continuou a evoluir, adicionando recursos de suporte à saúde mental e bem-estar emocional. A comunidade cresceu, promovendo grupos de apoio e eventos educacionais.
        Hoje, o projeto "Bem-Estar" inspira milhões a priorizarem sua saúde e qualidade de vida. Sua jornada continua, inovando e se expandindo para tornar o bem-estar acessível a todos. Esta é a história do projeto "Bem-Estar", uma jornada de paixão e dedicação para tornar o mundo mais saudável e feliz. O futuro é promissor, com muitos capítulos emocionantes ainda por vir.
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
                <h1 className="text-4xl font-bold mb-10">Nossa <span className="text-green-600">história</span></h1>
                <span>{historyText}</span>
            </div>
          </div>
            <div className='mb-40'>
              <Join/>
            </div>
          <Footer/>
      </main>
    );
}  

export default HistoryPage;