import "./links.css"

export function Footer (){
  return(
    <footer className="bg-cinzaFooter dark:bg-neutral-900 p-20 mt-30 sm:mt-24 lg:mt-0">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 justify-center items-center">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-l from-azul to-rosa bg-clip-text text-transparent text-shadow dark:shadow-neutral-900/10">Sobre Mim</h2>
        <h3 className="text-lg font-medium text-center text-cinzaApr dark:text-stone-200">Meu nome é Victor Hugo e sou um futuro Dev Full Stack</h3>
        <p className="text-justify text-base font-medium text-cinzaApr dark:text-stone-200">Cursando o último semestre de Análise e Desenvolvimento de Sistemas, sou entusiasta na área de TI e apaixonado por programação. Estou sempre buscando me superar e aprender coisas novas, ansioso para ver aonde vou chegar. Ao longo do último ano de estudo, desenvolvi um forte interesse pelo Front-End, criando uma base sólida com HTML5 e CSS3. Agora, busco aperfeiçoamento com JavaScript e ReactJS, além de possuir conhecimento em outras linguagens relacionadas ao Back-End, como PHP, SQL e NodeJS. Além dos conhecimentos técnicos, sou comunicativo, focado em resolver problemas, trabalho bem de forma independente e aprecio um ótimo trabalho em equipe, sempre disposto a aprender coisas novas.</p>

        <div className="flex gap-5">
          <a href="https://www.linkedin.com/in/victor-hugo-s-martins-7b575716a/" target="_blanc" className="mask1 bg-gradient-to-l from-azul to-rosa size-9">
          </a>
          <a href="https://github.com/viitones" target="_blanc" className="mask2 bg-gradient-to-l from-azul to-rosa size-9">
          </a>
          <a href="https://wa.me/5561991967710" target="_blanc" className="mask3 bg-gradient-to-l from-azul to-rosa size-9">
          </a>
        </div>
      </div>
    </footer>
  )
}