import { Star } from "lucide-react";
import { formatDateTime } from "../lib/date";

interface FoodItem {
        date: string;
        description: string;
        photoPath: string;
}

interface FoodListProps {
        food: FoodItem[];
}


export const ListFood: React.FC<FoodListProps> = ({ food }) => {
    return (
        <div className="mt-12 ml-8">
            {food.map((item: FoodItem, index: number) => (
                <div key={index} className="block mb-4">
                    <div className="text-2xl text-muted-foreground mb-4">
                        <span>Dia </span> {formatDateTime(item.date).date}
                    </div>
                    <div>
                        <span className="font-bold">Horário:</span> {formatDateTime(item.date).time}
                    </div>
                    <div>
                        <span className="font-bold">Descrição:</span> {item.description}
                    </div>
                    <div>
                        <span className="font-bold">Imagem:</span> <img src={item.photoPath} alt="" className="mt-4 max-w-[300px]"/>
                    </div>
                    <hr className="mt-4" />
                </div>
            ))}
        </div>
    );
};

interface Activity {
    name: string;
    startTime: string;
    endTime: string;
  }
  
  interface ActivityListProps {
    activities: Activity[];
  }
  
export const ListActivity: React.FC<ActivityListProps> = ({ activities }) => {
    return (
      <div className="mt-12 ml-8">
        {activities.map((item, index) => (
          <div key={index} className="block mb-4">
            <div className="text-2xl text-muted-foreground mb-4">
              <span>Dia </span> {formatDateTime(item.startTime).date}
            </div>
            <div>
              <span className="font-bold">Descrição:</span> {item.name}
            </div>
            <div>
              <span className="font-bold">Início:</span> {formatDateTime(item.startTime).time}
            </div>
            <div>
              <span className="font-bold">Fim:</span> {formatDateTime(item.endTime).time}
            </div>
            <hr className="mt-4" />
          </div>
        ))}
      </div>
    );
};

interface Sleep {
    startTime: string;
    endTime: string;
    feeling: string;
    stars: number;
  }
  
  interface SleepListProps {
    sleep: Sleep[];
  }

export const ListSleep: React.FC<SleepListProps> = ({ sleep }) => {
    return (
      <div className="mt-12 ml-8">
        {sleep.map((item, index) => (
          <div key={index} className="block mb-4">
            <div className="text-2xl text-muted-foreground mb-4">
              <span>Dia </span> {formatDateTime(item.startTime).date}
            </div>
            <div>
              <span className="font-bold mr-2">Horário em que dormiu:</span> {formatDateTime(item.startTime).time}
            </div>
            <div>
              <span className="font-bold mr-2">Horário em que acordou:</span> {formatDateTime(item.endTime).time}
            </div>
            <div>
              <span className="font-bold mr-2">Acordei me sentindo:</span> {item.feeling}
            </div>
            <div>
              <span className="font-bold mr-2">Avaliação do sono:</span>
              {Array.from({ length: item.stars }).map((_, index) => (
                  <Star key={index} className="inline-block mr-2 text-yellow-500"/>
              ))}
            </div>
            <hr className="mt-4" />
          </div>
        ))}
      </div>
    );
};

interface Humor {
  date: string;
  feeling: string;
}

interface HumorListProps {
  humor: Humor[];
}

export const ListHumor: React.FC<HumorListProps> = ({ humor }) => {
  return (
    <div className="mt-12 ml-8">
      {humor.map((item, index) => (
        <div key={index} className="block mb-4">
          <div className="text-2xl text-muted-foreground mb-4">
            <span>Dia </span> {formatDateTime(item.date).date}
          </div>
          <div>
            <span className="font-bold mr-2">Como estava me sentindo:</span> {item.feeling}
          </div>
          <hr className="mt-4" />
        </div>
      ))}
    </div>
  );
};