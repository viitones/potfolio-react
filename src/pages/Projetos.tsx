import { CardProjeto } from "../components/CardProjeto";
import { FooterProjeto } from "../components/FooterProjeto";

export function Projetos (){
  return (
    <section className='bg-cinzaFooter'>
      <div className="w-full max-w-lg md:max-w-4xl mx-auto pb-32 px-10 sm:px-7 md:px-3 flex flex-col items-center gap-9">
        <h2 className="mt-14 text-[2rem] sm:text-[3rem] max-w-lg font-bold text-shadow shadow-zinc-500/20 bg-gradient-to-l from-rosa to-azul bg-clip-text text-transparent drop-shadow-md">
          Projetos
        </h2>

        <CardProjeto />
        <CardProjeto />
        <CardProjeto />

      </div>

      <FooterProjeto />
    </section>
  )
}