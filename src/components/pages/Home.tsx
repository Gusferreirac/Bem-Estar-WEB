import ActivityForm from "../forms/ActivityForm";
import Footer from "../landing/Footer";
import Navbar from "../landing/Navbar";
import Modal from "react-modal"
import { useState } from "react";
import SleepForm from "../forms/SleepForm";
import FoodForm from "../forms/FoodForm";
import { X } from "lucide-react";
import { getUser } from "../lib/auth";
import api from "../lib/api";
import { ListActivity, ListFood, ListHumor, ListSleep } from "../misc/ListItems";
import CardStyle from "../misc/CardStyle";
import HumorForm from "../forms/HumorForm";

const Home = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [formType, setForm] = useState(0);
    const [title, setTitle] = useState("");
    const [food, setFood] = useState([]);
    const [sleep, setSleep] = useState([]);
    const [activities, setActivities] = useState([]);
    const [humor, setHumor] = useState([]);
    const [showFoodDetails, setShowFoodDetails] = useState(false);
    const [showSleepDetails, setShowSleepDetails] = useState(false);
    const [showActivitiesDetails, setShowActivitiesDetails] = useState(false);
    const [showHumorDetails, setShowHumorDetails] = useState(false);
    const activityContent = "Crie sua própria rotina de exercícios com o nosso Moderador de Atividade! Registre e acompanhe suas atividades físicas personalizadas, estabeleça metas de condicionamento físico e compartilhe suas conquistas com a comunidade. Com lembretes úteis e um registro de progresso fácil de usar, o Moderador de Atividade é a ferramenta perfeita para você alcançar seus objetivos de saúde e bem-estar. Comece hoje e seja o autor da sua jornada de fitness!"
    const sleepContent = "Tenha um sono melhor e mais revigorante com o nosso Acompanhamento de Sono! Registre seus padrões de sono, monitore a qualidade do seu descanso e descubra dicas para melhorar suas noites. Com gráficos informativos e insights personalizados, o Acompanhamento de Sono ajuda você a entender e aprimorar seus hábitos de sono. Durma melhor, acorde revigorado e cuide da sua saúde. Comece hoje a conquistar noites de sono mais tranquilas!"
    const foodContent = "Mantenha uma alimentação saudável e equilibrada com nosso Acompanhamento de Alimentação! Registre suas refeições, monitore a ingestão de calorias e receba recomendações personalizadas para atingir seus objetivos de saúde. Com gráficos claros e insights nutricionais, nosso Acompanhamento de Alimentação o ajuda a fazer escolhas conscientes para uma vida mais saudável. Comece hoje a alimentar seu corpo da maneira certa!"
    const humorContent = "Registre diariamente suas emoções, acompanhe suas mudanças de humor e acesse facilmente o histórico emocional. Com o nosso Acompanhamento de Humor, você pode promover seu bem-estar emocional, ganhando uma compreensão mais profunda de suas experiências emocionais ao longo do tempo. Comece hoje a nutrir sua mente e coração da maneira certa, dando a devida atenção ao seu bem-estar emocional."
    const name = getUser().name;
    const userId = getUser().sub;

    function openModal(){
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    function openActivity(){
        setForm(1);
        setTitle("Moderador de Atividade");
        openModal();
    }

    function openSleep(){
        setForm(2);
        setTitle("Moderador de Sono");
        openModal();
    }

    function openFood(){
        setForm(3);
        setTitle("Moderador de Alimentação");
        openModal();
    }

    function openHumor(){
        setForm(4);
        setTitle("Moderador de Humor");
        openModal();
    }

    async function listFood(){
        try {
            const response = await api.get(`/food/${userId}`);
            // Verifique a resposta do servidor, redirecione se necessário
            if (response.status === 200) {
                setFood(response.data)
                setShowFoodDetails(true)
                setForm(5);
                setTitle("Histórico de Alimentação");
                openModal();
                
            } else {
                console.error('Erro no servidor:', response.status);
            }
        } catch (error) {
            console.error('Erro no servidor:', error);
        }
    }

    async function listSleep(){
        try {
            const response = await api.get(`/sleep/${userId}`);
            
            
            // Verifique a resposta do servidor, redirecione se necessário
            if (response.status === 200) {
                setSleep(response.data)
                setShowSleepDetails(true)
                setForm(6);
                setTitle("Histórico de Sono");
                openModal();
                
            } else {
                console.error('Erro no servidor:', response.status);
            }
        } catch (error) {
            console.error('Erro no servidor:', error);
        }
    }

    async function listActivities(){
        try {
            const response = await api.get(`/activity/${userId}`);
            
            
            // Verifique a resposta do servidor, redirecione se necessário
            if (response.status === 200) {
                console.log(response.data);
                
                setActivities(response.data)
                setShowActivitiesDetails(true)
                setForm(7);
                setTitle("Histórico de Atividades");
                openModal();
                
            } else {
                console.error('Erro no servidor:', response.status);
            }
        } catch (error) {
            console.error('Erro no servidor:', error);
        }
    }

    async function listHumor(){
        try {
            const response = await api.get(`/humor/${userId}`);
            
            
            // Verifique a resposta do servidor, redirecione se necessário
            if (response.status === 200) {
                setHumor(response.data)
                setShowHumorDetails(true)
                setForm(8);
                setTitle("Histórico de Humor");
                openModal();
                
            } else {
                console.error('Erro no servidor:', response.status);
            }
        } catch (error) {
            console.error('Erro no servidor:', error);
        }
    }

    return(
        <main className='min-h-screen'>
        <div className='relative overflow-hidden'>
          <img className='absolute z-0 w-3/4 right-0' src="src/assets/backgrounds/bg_top.svg" alt="" />
          <div className='relative'>
            <Navbar type="header" isHome={true}/> 
          </div>
        </div>
        <div>
            <h1 className="text-3xl font-bold m-10">Olá <span className="text-green-600">{name}</span>, o que podemos fazer por você?</h1>
            <div className="mx-10 my-20 grid grid-cols-4 gap-8">
                {/* Atividade */}
                <CardStyle title="Atividade" content={activityContent} onClick={openActivity} onList={listActivities}/>
                {/* Sono */}
                <CardStyle title="Sono" content={sleepContent} onClick={openSleep} onList={listSleep}/>
                {/* Alimentacao */}
                <CardStyle title="Alimentação" content={foodContent} onClick={openFood} onList={listFood}/>

                {/* Humor */}
                <CardStyle title="Humor" content={humorContent} onClick={openHumor} onList={listHumor}/>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <h1 className="text-2xl font-bold text-center mb-8">{title}</h1>
                <a onClick={closeModal} className="right-0 top-0 m-8 absolute hover:cursor-pointer hover:text-green-600"><X/></a>
                {formType == 1 ? <ActivityForm onClose={closeModal}/>
                : formType == 2 ? <SleepForm onClose={closeModal}/>
                : formType == 3 ? <FoodForm onClose={closeModal} />
                : formType == 4 ? <HumorForm onClose={closeModal} />
                : formType == 5 ? <div> {showFoodDetails && ( <ListFood food={food}/>)}</div>
                :formType == 6? <div>{showSleepDetails && (<ListSleep sleep={sleep}/>)}</div>
                :formType == 7? <div>{showActivitiesDetails && (<ListActivity activities={activities}/>)}</div>
                :formType == 8? <div>{showHumorDetails && (<ListHumor humor={humor}/>)}</div>
                : null
                }
            </Modal>
        </div>
        <Footer/>
      </main>
    );
}  

export default Home;