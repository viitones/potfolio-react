
import { Code, FileArrowDown, Sliders } from "@phosphor-icons/react/dist/ssr";
import { Graduacoes } from "../components/Graduacoes";
import { Skill } from "../components/Skill";

import curriculo from "../download/Curriculo - Victor Hugo da Silva Martins.pdf"

export function Formacao (){
  const formac = [
    {id: 1, data: "01/2022 - 06/2024", intituicao: "UNOPAR", curso: "Análise e Desenvolvimento de Sistemas", desc: "Curso voltado para a prática em programação; formação para atuar em diversas áreas como em desenvolvimento de software, análise de sistemas, gestão de projetos, entre outros, contribuindo para a criação e manutenção de soluções tecnológicas inovadoras."},
    {id: 2, data: "07/2024 - 07/2025", intituicao: "SIRIUS", curso: "MBA Full-Stack", desc: "Focado em dominar as tecnologias mais modernas e habilidades técnicas requisitadas pelo mercado, pronto(a) para desenvolver soluções completas e robustas para web e mobile de forma eficiente e criativa."},
  ]
  
  const skill = [
    {id: 1, content: "Comunicativo"},
    {id: 2, content: "Proativo"},
    {id: 3, content: "Aprendizado rápido"},
    {id: 4, content: "Determinado"},
    {id: 5, content: "Trabalho em equipe"},
    {id: 6, content: "Busca resultados"},
  ]

  const prof = [
    {id: 1, content: "ReactJS"},
    {id: 2, content: "NextJS"},
    {id: 3, content: "TypeScript"},
    {id: 4, content: "Tailwind CSS"},
    {id: 5, content: "Styled Components"},
    {id: 6, content: "NodeJS"},
    {id: 7, content: "Postgres"},
    {id: 8, content: "PHP"},
    ]

  return (
    <section className="bg-cinzaFooter dark:bg-neutral-900">
      <div className="w-full max-w-lg md:max-w-4xl mx-auto pb-32 px-10 sm:px-7 md:px-3 flex flex-col items-center gap-5">
          
        <h2 className="mt-14 text-[2rem] sm:text-[3rem] max-w-lg font-bold text-shadow shadow-zinc-500/20 bg-gradient-to-l from-rosa to-azul bg-clip-text text-transparent drop-shadow-md">Formação</h2>
        
        <div className="w-full flex sm:flex-row items-center justify-center gap-2 sm:justify-between">
          <h3 className="text-2xl sm:text-4xl font-bold text-azul dark:text-indigo-600">Educação</h3>
          <a href={curriculo} download className='px-3 sm:px-10 py-2 sm:py-4 w-fit flex items-center justify-center gap-2 bg-azul border border-azul hover:bg-azulHover dark:bg-indigo-800 dark:hover:bg-indigo-900 dark:border-indigo-800 transition-all text-branco font-medium text-base md:text-lg rounded-lg'>
            <FileArrowDown weight="fill" size={25} />
            <span className="hidden sm:inline">Baixar Currículo</span>
          </a>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 w-auto">

          {formac.map((formm)=>(
            <Graduacoes key={formm.id} title={{data: formm.data, instituicao: formm.intituicao, curso: formm.curso, desc: formm.desc}} />
          ))}

          <div className="w-full min-w-full sm:w-fit flex flex-col justify-between items-start gap-6 px-7 py-10 rounded-2xl bg-white dark:bg-neutral-800 text-shadow shadow-zinc-500/20 shadow-[3px_3px_6px_2px_#383b3f34] dark:shadow-neutral-900/10">

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
                <h3 className="text-[2rem] text-center font-bold text-shadow shadow-zinc-500/20 bg-gradient-to-l from-rosa to-azul bg-clip-text text-transparent drop-shadow-md">Tecnologias</h3>
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