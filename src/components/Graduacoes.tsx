interface dadosGraduacoes {
    title:{
        data: string
        instituicao: string
        curso: string
        desc: string
    }
}

export function Graduacoes({title}: dadosGraduacoes){
    return(
        <div className="w-full sm:w-fit flex flex-col md:flex-row justify-between gap-6 items-center px-7 py-10 rounded-2xl bg-white dark:bg-neutral-800 text-shadow shadow-zinc-500/20 shadow-[3px_3px_6px_2px_#383b3f34] dark:shadow-neutral-900/10">
            <div className="bg-cinzaFooter dark:bg-neutral-900 text-shadow shadow-zinc-500/20 flex flex-col justify-center items-center text-center gap-2 font-bold w-full md:max-w-56 rounded-2xl p-3 shadow-[3px_3px_6px_2px_#383b3f34] dark:shadow-neutral-900/10">
                <span className="text-azul dark:text-indigo-600">{title.data}</span>
                <h3 className="text-base dark:text-stone-200">{title.instituicao}</h3>
                <p className="font-base text-sm text-cinzaNavHover dark:text-stone-300">{title.curso}</p>
            </div>
            <p className="text-justify text-lg text-cinzaNavHover dark:text-stone-300">{title.desc}</p>
        </div>
    )
}