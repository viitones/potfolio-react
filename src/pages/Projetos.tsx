import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { CardProjeto } from "../components/CardProjeto";
import { FooterProjeto } from "../components/FooterProjeto";

import clinica from "../assets/clinica.png"
import agencia from "../assets/agencia.png"


export function Projetos (){

  return (
    <section className='bg-cinzaFooter dark:bg-neutral-900'>
      <div className="flex flex-col justify-center items-center gap-9 w-full max-w-lg md:max-w-4xl mx-auto pb-32 px-10 sm:px-7 md:px-3">
        <h2 className="mt-14 text-[2rem] sm:text-[3rem] max-w-lg font-bold text-shadow shadow-zinc-500/20 dark:shadow-neutral-900/10 bg-gradient-to-l from-rosa to-azul bg-clip-text text-transparent drop-shadow-md">
          Projetos
        </h2>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className='w-full rounded-2xl px-4 py-2'
        >
          
          <SwiperSlide >
            <div className='flex justify-center'>
            <CardProjeto nota={{
              title:"Clínica Medic Life", 
              paragraph:"A proposta desse projeto foi criar uma página web responsiva utilizando as tecnologias HTML e CSS, uso de tabelas informativas, navegação entre abas, flexbox e media queries.",
              linka:"https://github.com/viitones/Medic-Life",
              linkb:"https://medic-life.vercel.app/",
              imagem: `${clinica}`,
              alt: "Projeto da clínica Medic Life"}} />
            </div>
          </SwiperSlide>
          
          <SwiperSlide >
            <CardProjeto nota={{
              title:"Agência de Viagem", 
              paragraph:"A proposta desse projeto foi criar o front-end de uma página web dinâmica utilizando conceitos de formulários para enviar dados do front-end para o back-end (disponibilizado pela plataforma).",
              linka:"https://github.com/viitones/Agencia-de-viagem",
              linkb:"https://agencia-de-viagem-blond.vercel.app/",
              imagem: `${agencia}`,
              alt: "Projeto agência de viagem"}} />
          </SwiperSlide>      
                
        </Swiper>

      </div>

      <FooterProjeto />
    </section>
  )
}