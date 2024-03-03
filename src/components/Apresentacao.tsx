import eu from "../assets/cabecudo.webp";
import DotsBr from '../assets/dot1.svg';
import DotsAz from '../assets/dot2.svg';

export function Apresentacao (){
  return (
    <section className='max-w-7xl mx-auto h-[80vh]'>
      <div className='flex justify-evenly '>
        <div className='my-10 flex flex-col gap-8'>
          <span className='max-w-max font-bold text-xs text-branco bg-gradient-to-l rounded px-1 py-[2px] from-azul to-rosa'>
            · DESENVOLVEDOR ·
          </span>

          <div className="flex flex-col gap-4">
            <p className=' text-cinzaP text-3xl font-light brightness-125'>
              Olá, tudo bem?
            </p>
            
            <h1 className='text-6xl max-w-lg font-bold text-shadow shadow-zinc-500/20 bg-gradient-to-l from-azul to-rosa bg-clip-text text-transparent drop-shadow-md'>Seja bem vindo ao meu Portfólio!</h1>
          </div>
          
          <div className='flex gap-7'>
            <a href="#" className='bg-azul border border-azul hover:bg-azulHover transition-all px-12  py-4 text-branco font-bold rounded-lg'>Sobre</a>
            <a href="#" className='bg-branco border border-black  hover:bg-black px-12 transition-all py-4 text-black hover:text-branco font-bold rounded-lg'>Projetos</a>
          </div>
        </div>

        <div className='max-w-lg'>
          <div className='relative bg-gradient-to-tl from-azul to-rosa size-[38rem]  rounded-[70px] '>
            <img className='absolute bottom-5 -translate-x-6 scale-105 pointer-events-none' src={eu} alt="Victor Hugo" />
            <img className='absolute -right-16 top-12 size-44' src={DotsBr} alt="" />
            <img className='absolute -right-28 top-24 size-44' src={DotsAz} alt="" />
            <img className='absolute -left-16 bottom-12 size-44' src={DotsBr} alt="" />
            <img className='absolute -left-28 bottom-24 size-44' src={DotsAz} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}