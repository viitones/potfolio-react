import "./links.css"

export function FooterProjeto (){
  return(
    <footer className="flex justify-center items-center p-20 sm:mt-24 h-auto bg-gradient-to-l from-rosa to-azul">
      
      <div className="flex gap-9 flex-col justify-center items-center">
        <h3 className="text-white font-bold text-4xl sm:text-5xl lg:6xl text-center">Vamos programar juntos</h3>
        <a href="https://wa.me/5561991967710" target="_blank" className="vidro border text-white text-base sm:text-lg font-bold scroll-px-72 px-7 sm:px-14 py-4 rounded-lg">Entre em contato</a>
      </div>
      
    </footer>
  )
}