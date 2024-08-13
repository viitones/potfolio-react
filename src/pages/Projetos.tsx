import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { CardProjeto } from "../components/CardProjeto";
import { FooterProjeto } from "../components/FooterProjeto";

import todo from "../assets/todo.png"
import ignite from "../assets/ignite.png"
import notes from "../assets/notes.png"


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
              title:"Notes", 
              paragraph:"Notes uma aplicação Front-End web e mobile construída com tecnologias como react, TS e com a api de voz do navegador.",
              linka:"https://github.com/viitones/Notes",
              linkb:"https://notes-seven-ruby.vercel.app/",
              imagem: `${notes}`,
              alt: "Projeto TODO"}} />
            </div>
          </SwiperSlide>

          <SwiperSlide >
            <div className='flex justify-center'>
            <CardProjeto nota={{
              title:"Todo List", 
              paragraph:"Todo é uma aplicação Front-End web e mobile construída como forma de desafio proposto pela Rocketseat. A aplicação consiste basicamente em uma lista de tarefas simples onde você pode adicionar e remover tarefas a fazer e marca-las como concluídas..",
              linka:"https://github.com/viitones/Todo-List",
              linkb:"https://todo-list-five-delta-42.vercel.app/",
              imagem: `${todo}`,
              alt: "Projeto TODO"}} />
            </div>
          </SwiperSlide>
          
          <SwiperSlide >
            <CardProjeto nota={{
              title:"Ignite Feed", 
              paragraph:"Projeto de uma página inicial de uma rede social, podendo adicionar comentários e curtidas.",
              linka:"https://github.com/viitones/ignite-feed_Teste",
              linkb:"https://ignite-feed-teste.vercel.app/",
              imagem: `${ignite}`,
              alt: "Projeto Ignite Feed"}} />
          </SwiperSlide>      
                
        </Swiper>

      </div>

      <FooterProjeto />
    </section>
  )
}