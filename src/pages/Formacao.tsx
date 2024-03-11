
import { Code, FileArrowDown, Sliders } from "@phosphor-icons/react/dist/ssr";
import { Graduacoes } from "../components/Graduacoes";
import { Skill } from "../components/Skill";

import curriculo from "../download/Curriculo - Victor Hugo da Silva Martins.pdf"

export function Formacao (){
  const skill = [
    {id: 1, content: "Comunicativo"},
    {id: 2, content: "Proativo"},
    {id: 2, content: "Aprendizado rápido"},
    {id: 2, content: "Determinado"},
    {id: 2, content: "Trabalho em equipe"},
    {id: 2, content: "Busca resultados"},
  ]

  const prof = [
    {id: 1, content: "HTML5"},
    {id: 2, content: "CSS3"},
    {id: 3, content: "JavaScript"},
    {id: 4, content: "TypeScript (estudando)"},
    {id: 5, content: "NodeJS (estudando)"},
    {id: 6, content: "MySql (estudando)"},
  ]

  return (
    <section className="bg-cinzaFooter">
      <div className="w-full max-w-lg md:max-w-4xl mx-auto pb-32 px-10 sm:px-7 md:px-3 flex flex-col items-center gap-5">
          
        <h2 className="mt-14 text-[2rem] sm:text-[3rem] max-w-lg font-bold text-shadow shadow-zinc-500/20 bg-gradient-to-l from-rosa to-azul bg-clip-text text-transparent drop-shadow-md">Formação</h2>
        
        <div className="w-full flex sm:flex-row items-center justify-center gap-2 sm:justify-between">
          <h3 className="text-2xl sm:text-4xl font-bold text-azul">Educação</h3>
          <a href={curriculo} download className='px-3 sm:px-10 py-2 sm:py-4 w-fit flex items-center justify-center gap-2 bg-azul border border-azul hover:bg-azulHover transition-all text-branco font-medium text-base md:text-lg rounded-lg'>
            <FileArrowDown weight="fill" size={25} />
            <span className="hidden sm:inline">Baixar Currículo</span>
          </a>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 w-auto">

          <Graduacoes />
          <Graduacoes />
          <Graduacoes />

          <div className="w-full min-w-full sm:w-fit flex flex-col justify-between items-start gap-6 px-7 py-10 rounded-2xl bg-white text-shadow shadow-zinc-500/20 shadow-[3px_3px_6px_2px_#383b3f34]">

            <div className="flex flex-col md:items-start">
              
              <div className="flex items-center justify-center gap-2">
                <Sliders className="size-9 p-1 rounded-lg text-white hidden md:inline-flex bg-gradient-to-l from-rosa to-azul" />
                <h3 className="text-[2rem] text-center font-bold text-shadow shadow-zinc-500/20 bg-gradient-to-l from-rosa to-azul bg-clip-text text-transparent drop-shadow-md">Habilidades profissionais</h3>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-5 mt-3">

                {skill.map((skil) => (
                  <Skill key={skil.id} content={{title:skil.content}} />
                ))}
                

              </div>
            </div>

            <div className="flex flex-col md:items-start">
              
              <div className="flex items-center justify-center gap-2">
                <Code className="size-9 p-1 rounded-lg text-white hidden md:inline-flex bg-gradient-to-l from-rosa to-azul" />
                <h3 className="text-[2rem] text-center font-bold text-shadow shadow-zinc-500/20 bg-gradient-to-l from-rosa to-azul bg-clip-text text-transparent drop-shadow-md">Habilidades profissionais</h3>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-5 mt-3">

               {prof.map((pro) => (
                <Skill key={pro.id} content={{title:pro.content}} />
               ))}

              </div>
            </div>

            

          </div>

        </div>

      </div>
    </section>
  )
}