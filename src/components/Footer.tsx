import "./links.css"

export function Footer (){
  return(
    <footer className="bg-cinzaFooter p-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 justify-center items-center">
        <h2 className="text-5xl font-bold bg-gradient-to-l from-azul to-rosa bg-clip-text text-transparent">Sobre Mim</h2>
        <h3 className="text-lg text-cinzaApr">Meu nome é Victor e sou um futuro Dev Full Stack</h3>
        <p className="text-center text-lg text-cinzaApr">Cursando o último semestre de Análise e Desenvolvimento de Sistemas, sou entusiasta na área de TI e apaixonado por programação. Estou sempre buscando me superar e aprender coisas novas, ansioso para ver aonde vou chegar. Ao longo do último ano de estudo, desenvolvi um forte interesse pelo Front-End, criando uma base sólida com HTML5 e CSS3. Agora, busco aperfeiçoamento com JavaScript e ReactJS, além de possuir conhecimento em outras linguagens relacionadas ao Back-End, como PHP, SQL e NodeJS. Além dos conhecimentos técnicos, sou comunicativo, focado em resolver problemas, trabalho bem de forma independente e aprecio um ótimo trabalho em equipe, sempre disposto a aprender coisas novas.</p>

        <div className="flex gap-5">
          <a className="mask1 bg-gradient-to-l from-azul to-rosa size-12">
          </a>
          <a className="mask2 bg-gradient-to-l from-azul to-rosa size-12">
          </a>
          <a className="mask3 bg-gradient-to-l from-azul to-rosa size-12">
          </a>
        </div>
      </div>
    </footer>
  )
}