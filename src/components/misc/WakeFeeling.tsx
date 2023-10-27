import { Angry, Annoyed, Meh, Smile } from "lucide-react";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

import { useState } from "react";

type WakeFeelingProps = {
    onFeelingChange: (feeling: string) => void;
};

export const WakeFeeling = ({ onFeelingChange }: WakeFeelingProps) => {
    const [value, setValue] = useState("normal");

    const handleValueChange = (newValue: string) => {
        console.log(value);
        
        setValue(newValue);
        onFeelingChange(newValue);
    };

    return (
        <RadioGroup
            value={value}
            onValueChange={(newValue) => handleValueChange(newValue)}
            className="flex mb-4 items-center justify-center"
        >
            <div className="items-center mx-2">
                <RadioGroupItem
                    value="Muito Cansado"
                    className="peer border-black border-solid block m-auto mb-2"
                    id="r1"
                />
                <Label htmlFor="r1" className="peer-aria-checked:text-red-500 block">
                    Muito cansado
                    <Angry className="m-auto"/>
                </Label>
            </div>
            <div className="items-center mx-2">
                <RadioGroupItem
                    value="Cansado"
                    className="peer border-black border-solid block m-auto mb-2"
                    id="r2"
                />
                <Label htmlFor="r2" className="peer-aria-checked:text-orange-600 block">
                    Cansado
                    <Annoyed className="m-auto"/>
                </Label>
            </div>
            <div className="items-center mx-2">
                <RadioGroupItem
                    value="Normal"
                    className="peer border-black border-solid block m-auto mb-2"
                    id="r3"
                />
                <Label htmlFor="r3" className="peer-aria-checked:text-yellow-600 block">
                    Normal
                    <Meh className="m-auto"/>
                </Label>
            </div>
            <div className="items-center mx-2">
                <RadioGroupItem
                    value="Bem"
                    className="peer border-black border-solid block m-auto mb-2"
                    id="r4"
                />
                <Label htmlFor="r4" className="peer-aria-checked:text-green-600 block">
                    Bem
                    <Smile className="m-auto"/>
                </Label>
            </div>
        </RadioGroup>
    );
};
