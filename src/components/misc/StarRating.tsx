import { useState } from "react";
import { Star } from "lucide-react";

type StarRatingProps = {
  onRatingChange: (rating: number) => void;
};

const StarRating = ({ onRatingChange }: StarRatingProps) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleRatingChange = (newRating: number) => {
      setRating(newRating);
      onRatingChange(newRating); // Chame a função de retorno para enviar o valor para o componente pai
  };


    const css = `
        button {
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer;
        }
        .on {
            color: #FFD700;
        }
        .off {
            color: #ccc;
        }      
        `
    return (
      <div className="mb-4">
        <style>
            {css}
        </style>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => handleRatingChange(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            >
            <span><Star/></span>
            </button>
          );
        })}
      </div>
    );
  };
  
 export default StarRating;  