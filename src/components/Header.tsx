import { Code } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { BotaoDark } from "./BotaoDark";

export function Header () {
  return (
    <header className='transition-colors duration-300 bg-white dark:bg-neutral-800 w-full py-4'>
      <div className="w-full max-w-lg px-5 sm:max-w-3xl lg:max-w-7xl lg:px-10 mx-auto sm:flex justify-center sm:justify-between items-center flex-wrap">
        <Link to="/" className='flex items-center justify-center gap-1 text-2xl font-bold text-azul dark:text-indigo-600 text-shadow dark:shadow-neutral-900/10'>
          <Code weight="bold" className='text-4xl mb-3' />
          <p className='text-3xl mb-3'>Victor Hugo</p>
        </Link>
        <nav className='navega flex items-center justify-center gap-4 mt-2 sm:mt-0 text-[20px] sm:text-lg font-semibold text-cinzaNav dark:text-stone-400 text-shadow dark:shadow-neutral-900/10'>
          <Link to="/" className="navegaLink hover:text-cinzaNavHover dark:hover:text-stone-200">Início</Link>
          <Link to="/formacao" className="navegaLink hover:text-cinzaNavHover dark:hover:text-stone-200">Formação</Link>
          <Link to="/projetos" className="navegaLink hover:text-cinzaNavHover dark:hover:text-stone-200">Projetos</Link>
          <BotaoDark />
        </nav>
      </div>
    </header>
  )
}