import { Code } from "@phosphor-icons/react";

export function Header () {
  return (
    <header className='w-full py-4'>
      <div className="w-full max-w-lg px-5 sm:max-w-3xl lg:max-w-7xl lg:px-10 mx-auto sm:flex justify-center sm:justify-between items-center flex-wrap">
        <div className='flex items-center justify-center gap-1 text-2xl font-bold text-azul'>
          <Code weight="bold" className='text-4xl mb-3' />
          <p className='text-3xl mb-3'>Victor Hugo</p>
        </div>
        <nav className='flex items-center justify-center gap-4 mt-2 sm:mt-0 text-[20px] sm:text-lg font-semibold text-cinzaNav'>
          <a className="hover:text-cinzaNavHover" href="#">Início</a>
          <a className="hover:text-cinzaNavHover" href="#">Formação</a>
          <a className="hover:text-cinzaNavHover" href="#">Projetos</a>
        </nav>
      </div>
    </header>
  )
}