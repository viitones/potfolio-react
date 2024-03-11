import { BotaoSubir } from './components/BotaoSubir';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';


export function App() {

  return (
    <>
      <Header />

      <main className=''>
        <Outlet />
      </main>

      <BotaoSubir />
    </>
  )
}
