import { Moon, Sun } from "@phosphor-icons/react";

import { ChangeEvent, useState } from "react";


export function BotaoDark(){
    const [isDark, setIsDark] = useState(Boolean)

    const element = document.documentElement.classList;

    window.onload = () => {

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            element.add('dark');
            setIsDark(true)
        } else {
            element.remove('dark');
            setIsDark(false)
        }
    
    }



    function setDarkMode(e: ChangeEvent<HTMLInputElement>){
        if(e.target.checked){
            element.remove('dark');
            localStorage.theme = 'light'

            setIsDark(false)
        }else{
            element.add('dark');
            localStorage.theme = 'dark'
            setIsDark(true)
        }
    }



    return(

        <label className="flex cursor-pointer">
            <input 
                id="check"
                type="checkbox" 
                className="sr-only peer"
                onChange={setDarkMode}
            />


        {isDark ? (
            <Moon weight="fill" className="w-[25px] h-[25px] text-yellow-500 animate-moon" />
        ) : (
            <Sun weight="fill" className="w-[25px] h-[25px] text-yellow-500 animate-sun" />
        )}

        </label>
        
    )
}