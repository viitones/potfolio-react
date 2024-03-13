interface ProjetosCard {
    nota:{
        title: string
        paragraph: string
        linka: string
        linkb: string
        imagem: string
        alt: string
    }
}

export function CardProjeto({nota}: ProjetosCard){
    return(
        <div className="flex items-center justify-center h-[90%] min-h-80 gap-5 px-7 rounded-2xl bg-white dark:bg-neutral-800 text-shadow shadow-zinc-500/20 dark:shadow-neutral-900/10 shadow-[3px_3px_6px_2px_#383b3f34]">
            <div className="flex flex-col gap-3 text-justify h-full">
                <h3 className="text-lg md:text-2xl font-bold dark:text-stone-200">{nota.title}</h3>
                <p className="text-base md:text-lg text-cinzaNavHover dark:text-stone-300">
                    {nota.paragraph}
                </p>
                <div className="text-base md:text-lg text-azul dark:text-indigo-800 flex gap-3 flex-wrap underline">
                    <a target="_blank" href={nota.linka}>Repositório</a>
                    <a target="_blank" href={nota.linkb}>Link do projeto</a>
                </div>
            </div>
            <div className="hidden md:inline-flex h-full">
                <a href={nota.linkb} target="_blank" className="hover:brightness-90">
                    <img src={nota.imagem} alt={nota.alt}/>
                </a>
            </div>
        </div>
    )
}