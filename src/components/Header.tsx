import { Code } from "@phosphor-icons/react";

export function Header () {
  return (
    <header className='mx-auto max-w-7xl flex justify-between my-6 '>
      <div className='flex gap-1 text-2xl font-bold text-azul'>
        <Code weight="bold" className='text-3xl' />
        Victor Hugo
      </div>
      <nav className='flex gap-4 text-lg font-semibold text-cinzaNav'>
        <a className="hover:text-cinzaNavHover" href="#">Início</a>
        <a className="hover:text-cinzaNavHover" href="#">Formação</a>
        <a className="hover:text-cinzaNavHover" href="#">Projetos</a>
      </nav>
    </header>
  )
}