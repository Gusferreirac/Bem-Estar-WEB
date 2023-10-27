import {  Apple, Bed, Dumbbell, Laugh } from "lucide-react";
import Footer from "../landing/Footer";
import Join from "../landing/Join";
import Navbar from "../landing/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ServicesPage = () => {
    const sleepText= `
      O nosso serviço de Moderador de Sono é uma ferramenta incrível para acompanhar o seu sono e melhorar a qualidade do seu descanso. Com ele, você pode registrar todas as suas noites de sono, incluindo as horas que dormiu, notas pessoais sobre a qualidade do sono e até mesmo atribuir uma avaliação.
      O destaque é o acesso ao histórico de todas as suas noites de sono. Você pode facilmente ver como tem dormido ao longo do tempo, identificar tendências e áreas que precisam de atenção. Isso dá a você uma compreensão profunda de seus hábitos de sono.
      Com o nosso Moderador de Sono, você está no caminho para noites de sono mais revigorantes e uma vida mais saudável. Experimente agora e transforme a sua rotina de sono para melhor. Sua jornada em busca de um sono de qualidade começa aqui.
    `
    const activityText= `
      O nosso serviço de Registro de Atividade Física é uma ferramenta prática e flexível que permite a você registrar suas atividades físicas de forma simples. Com ele, você tem o controle total sobre o que faz e como se sente durante suas sessões de exercícios.
      Basta inserir o horário de início e término de suas atividades, juntamente com uma breve descrição do que fez durante o treino. Essa abordagem direta e sem complicações permite que você mantenha um registro detalhado de suas atividades físicas.
      Você decide como deseja usar esse serviço. Seja para registrar suas corridas matinais, caminhadas à tarde, ou qualquer outra atividade física que faça parte de sua rotina.
      Ao registrar suas atividades, você pode acompanhar facilmente o seu histórico e identificar padrões. Isso fornece uma visão valiosa de suas práticas de exercícios ao longo do tempo.
      E o melhor de tudo, esse serviço não impõe regras estritas. Você é livre para descrever suas atividades como quiser, seja anotando suas conquistas, desafios superados ou simplesmente como se sentiu durante o treino.
      Com o nosso serviço de Registro de Atividade Física, você tem uma ferramenta descomplicada para acompanhar sua rotina de exercícios e obter insights valiosos sobre sua jornada de fitness. Experimente agora e comece a registrar suas atividades de maneira prática e personalizada. Sua busca por uma vida ativa começa aqui.
    `
    const feelingText= `
      O nosso serviço de Registro de Humor é uma ferramenta sensível e personalizável que permite que você acompanhe suas emoções, estados de espírito e sentimentos em sua jornada diária. Com ele, você tem a liberdade de expressar o que está passando de uma forma genuína e única.
      Escolha uma data e compartilhe como você está se sentindo naquele momento. Este é o seu espaço para expressar alegrias, preocupações, desafios e todas as nuances do seu humor. Este serviço é uma maneira poderosa de documentar sua experiência emocional.
      Ao registrar seus sentimentos, você pode criar um registro de sua jornada emocional ao longo do tempo. Isso oferece uma visão valiosa de como suas emoções evoluem e como fatores externos podem influenciar suas sensações.
      O serviço de Registro de Humor não impõe restrições. Use-o da maneira que mais fizer sentido para você, seja para celebrar suas vitórias emocionais, superar obstáculos ou simplesmente refletir sobre suas emoções do dia.
      Com o nosso serviço de Registro de Humor, você tem uma ferramenta personalizada para documentar e compreender suas emoções diárias de uma forma autêntica. Experimente agora e comece a registrar seus sentimentos de maneira única e significativa. Sua jornada de autoconhecimento emocional começa aqui.
    `
    const foodText= `
      O nosso serviço de Moderador de Alimentação é uma ferramenta versátil e atraente que permite a você registrar suas escolhas alimentares, documentar suas refeições e criar uma conexão pessoal com a sua nutrição diária. Com ele, você tem o controle total de como acompanha sua alimentação.
      Escolha uma data, tire uma foto da sua refeição ou lanche, e adicione uma descrição do que está consumindo. Este serviço permite que você crie um registro visual e descritivo de suas escolhas alimentares, tornando mais fácil entender e melhorar seus hábitos.
      Ao registrar suas refeições, você pode acompanhar facilmente o seu histórico e identificar padrões alimentares ao longo do tempo. Isso proporciona uma compreensão valiosa dos alimentos que compõem sua dieta e como eles afetam o seu bem-estar.
      Este serviço é completamente flexível, permitindo que você compartilhe suas experiências alimentares de forma pessoal. Registre suas refeições favoritas, experimentos culinários, ou até mesmo aquele jantar especial em um restaurante.
      Com o nosso serviço de Moderador de Alimentação, você tem uma ferramenta poderosa para criar um registro visual e descritivo de suas escolhas alimentares. Experimente agora e comece a acompanhar sua jornada nutricional de maneira única e envolvente. Sua busca por uma alimentação mais consciente começa aqui.
    `

    const {state} = useLocation();
    const id = state?.id; // Read values passed on state

    useEffect(() => {
      console.log(id);
      
      if(id){
        const element = document.querySelector(`#${id}`);
        if (element) {
          element.scrollIntoView({behavior: "smooth"});
        }
      }
    }, [id])
    

    return(
        <main className='min-h-screen'>
          <div className='relative overflow-hidden'>
            <img className='absolute z-0 w-3/4 right-0' src="src/assets/backgrounds/bg_top.svg" alt="" />
            <div className='z-10 relative'>
              <Navbar type="header" isHome={false}/> 
            </div>
          </div>
          <div className="text-justify w-2/3 m-auto mt-20">
            <h1 className="text-4xl font-bold mb-10">Nossos <span className="text-green-600">serviços</span></h1>
            <div className="mb-20" id="sleep">
                <div className="flex mb-8">
                  <Bed className="w-10 h-10 text-green-600 mr-2"/>
                  <h1 className="text-2xl text-green-600 font-bold my-auto">Sono</h1>
                </div>
                <span >{sleepText}</span>
            </div>
            <div className="mb-20" id="dumbbell">
                <div className="flex mb-8">
                  <Dumbbell className="w-10 h-10 text-green-600 mr-2"/>
                  <h1 className="text-2xl text-green-600 font-bold my-auto">Atividade Física</h1>
                </div>
                <span >{activityText}</span>
            </div>
            <div className="mb-20" id="humor">
                <div className="flex mb-8">
                  <Laugh className="w-10 h-10 text-green-600 mr-2"/>
                  <h1 className="text-2xl text-green-600 font-bold my-auto">Humor</h1>
                </div>
                <span>{feelingText}</span>
            </div>
            <div className="mb-20" id="food">
                <div className="flex mb-8">
                  <Apple className="w-10 h-10 text-green-600 mr-2"/>
                  <h1 className="text-2xl text-green-600 font-bold my-auto">Alimentação</h1>
                </div>
                <span>{foodText}</span>
            </div>
          </div>
            <div className='mb-40'>
              <Join/>
            </div>
          <Footer/>
      </main>
    );
}  

export default ServicesPage;