import { Code, FileArrowDown, Sliders } from "@phosphor-icons/react/dist/ssr";
import { Graduacoes } from "../components/Graduacoes";
import { Skill } from "../components/Skill";


export function Formacao (){
  return (
    <section className="bg-cinzaFooter">
      <div className="w-full max-w-lg md:max-w-4xl mx-auto pb-32 px-7 md:px-3 flex flex-col items-center gap-5">
          
        <h2 className="mt-14 text-[3rem] max-w-lg font-bold text-shadow shadow-zinc-500/20 bg-gradient-to-l from-rosa to-azul bg-clip-text text-transparent drop-shadow-md'">Formação</h2>
        
        <div className="w-full flex justify-between">
          <h3 className="text-4xl font-bold text-azul">Educação</h3>
          <a href="#" className='w-40 md:w-42 md:px-10 py-4 flex items-center justify-center gap-2 bg-azul border border-azul hover:bg-azulHover transition-all text-branco font-medium text-base md:text-lg rounded-lg'>
            <FileArrowDown weight="fill" size={25} />
            Baixar Currículo
          </a>
        </div>

        <div className="flex flex-col gap-5">
          <Graduacoes />
          <Graduacoes />
          <Graduacoes />

          <div className="flex flex-col justify-between items-start gap-6 px-7 py-10 rounded-2xl bg-white text-shadow shadow-zinc-500/20 shadow-[3px_3px_6px_2px_#383b3f34]">

            <div>
              <div className="flex justify-center items-center gap-3 w-max">
                <div className="w-fit bg-gradient-to-l from-rosa to-azul rounded-lg p-1">
                  <Sliders className="size-8 text-white"/>
                </div>
                <h3 className="text-[2rem] font-bold text-shadow shadow-zinc-500/20 bg-gradient-to-l from-rosa to-azul bg-clip-text text-transparent drop-shadow-md'">Habilidades Profissionais</h3>
              </div>


              <div className="mt-3 flex gap-5 w-full flex-wrap">

                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />

              </div>
            </div>

            <div>
              <div className="flex justify-center items-center gap-3 w-max">
                <div className="w-fit bg-gradient-to-l from-rosa to-azul rounded-lg p-1">
                  <Code className="size-8 text-white"/>
                </div>
                <h3 className="text-[2rem] font-bold text-shadow shadow-zinc-500/20 bg-gradient-to-l from-rosa to-azul bg-clip-text text-transparent drop-shadow-md'">Habilidades Profissionais</h3>
              </div>


              <div className="mt-3 flex gap-5 w-full flex-wrap">

                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />

              </div>
            </div>
            
            

            

          </div>

        </div>

      </div>
    </section>
  )
}