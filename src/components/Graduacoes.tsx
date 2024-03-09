export function Graduacoes(){
    return(
        <div className="w-full sm:w-fit flex flex-col md:flex-row justify-between gap-6 items-center px-7 py-10 rounded-2xl bg-white text-shadow shadow-zinc-500/20 shadow-[3px_3px_6px_2px_#383b3f34]">
            <div className="bg-cinzaFooter text-shadow shadow-zinc-500/20 flex flex-col justify-center items-center text-center gap-2 font-bold w-full md:max-w-56 rounded-2xl p-3 shadow-[3px_3px_6px_2px_#383b3f34]">
                <span className="text-azul">01/2022 - 06/2024</span>
                <h3 className="text-base">UNOPAR</h3>
                <p className="font-base text-sm text-cinzaNavHover">Análise e Desenvolvimento de Sistemas</p>
            </div>
            <p className="text-justify text-lg text-cinzaNavHover">Curso voltado para a prática em programação; formação para atuar em diversas áreas como em desenvolvimento de software, análise de sistemas, gestão de projetos, entre outros, contribuindo para a criação e manutenção de soluções tecnológicas inovadoras.</p>
        </div>
    )
}