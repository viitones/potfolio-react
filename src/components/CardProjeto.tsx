import clinica from "../assets/clinica.png"

export function CardProjeto(){
    return(
        <div className="flex items-center justify-center gap-5 px-7 py-10 rounded-2xl bg-white text-shadow shadow-zinc-500/20 shadow-[3px_3px_6px_2px_#383b3f34]">
            <div className="flex flex-col gap-3 text-justify">
                <h3 className="text-lg md:text-2xl font-bold">Clínica Medic Life</h3>
                <p className="text-base md:text-lg text-cinzaNavHover">
                    A proposta desse projeto foi criar uma página web responsiva utilizando as tecnologias HTML e CSS, uso de tabelas informativas, navegação entre abas, flexbox e media queries.
                </p>
                <div className="text-base md:text-lg text-azul flex gap-3 flex-wrap underline">
                    <a href="">Repositório</a>
                    <a href="">Link do projeto</a>
                </div>
            </div>
            <div className="hidden md:inline-flex h-full">
                <a href="" className="hover:brightness-105">
                    <img src={clinica} alt="" />
                </a>
            </div>
        </div>
    )
}