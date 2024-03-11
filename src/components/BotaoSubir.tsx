import { useState } from "react";
import { CaretUp } from "@phosphor-icons/react";

export function BotaoSubir(){
    const [isVisible, setVisible] = useState(false);

    const toggleVisibility = ()=>{
        if(window.scrollY > 300){
            setVisible(true)
        }else{
            setVisible(false)
        }
    };

    window.addEventListener("scroll", toggleVisibility)

    
    function scroolToTop(){
        window.scrollTo({top:0});
    }

    return(
        <div className={`${isVisible ? "!opacity-1" : "opacity-0"} transition-all cursor-pointer flex justify-center items-center hover:brightness-90 fixed bottom-[15%] right-[10%] z-50 bg-gradient-to-l from-rosa to-azul rounded-full text-shadow shadow-zinc-500/20 shadow-[3px_3px_6px_2px_#383b3f34]`}>
            <p onClick={scroolToTop}>
                <CaretUp className="text-white size-9" />
            </p>
        </div>
    )
}