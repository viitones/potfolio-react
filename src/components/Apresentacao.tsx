import eu from "../assets/cabecudo.webp";
import DotsBr from '../assets/dot1.svg';
import DotsAz from '../assets/dot2.svg';

export function Apresentacao (){
  return (
    <section className='max-w-7xl mx-auto h-svh lg:h-[80vh]'>
      <div className='flex flex-col items-center justify-center text-center lg:text-left 2xl:text-left lg:flex-row lg:justify-evenly '>
        <div className='flex flex-col items-center justify-center lg:justify-normal lg:items-start 2xl:justify-normal 2xl:items-start gap-8 mb-24'>
          <span className='max-w-max font-bold text-xs text-branco bg-gradient-to-l rounded px-1 py-[2px] from-azul to-rosa'>
            · DESENVOLVEDOR ·
          </span>

          <div className="flex flex-col gap-4">
            <p className=' text-cinzaP text-3xl font-light text-shadow shadow-zinc-500/50 brightness-125'>
              Olá, tudo bem?
            </p>
            
            <h1 className='text-6xl max-w-lg font-bold text-shadow shadow-zinc-500/20 bg-gradient-to-l from-azul to-rosa bg-clip-text text-transparent drop-shadow-md'>Seja bem vindo ao meu Portfólio!</h1>
          </div>
          
          <div className='flex gap-7'>
            <a href="#" className='bg-azul border border-azul hover:bg-azulHover transition-all px-12  py-4 text-branco font-bold rounded-lg'>Sobre</a>
            <a href="#" className='bg-branco border border-black  hover:bg-black px-12 transition-all py-4 text-black hover:text-branco font-bold rounded-lg'>Projetos</a>
          </div>
        </div>

        <div className='max-w-lg lg:ml-12'>
          <div className='relative bg-gradient-to-tl from-azul to-rosa size-[26rem] lg:size-[28rem] 2xl:size-[36rem] rounded-[70px] '>
            <img className='absolute bottom-5 -translate-x-6 scale-105 pointer-events-none' src={eu} alt="Victor Hugo" />
            <img className='absolute -right-12 2xl:-right-16 top-12 size-36 2xl:size-44' src={DotsBr} alt="" />
            <img className='absolute -right-24 2xl:-right-28 top-24 size-36 2xl:size-44' src={DotsAz} alt="" />
            <img className='absolute -left-12 2xl:-left-16 bottom-12 size-36 2xl:size-44' src={DotsBr} alt="" />
            <img className='absolute -left-24 2xl:-left-28 bottom-24 size-36 2xl:size-44' src={DotsAz} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}