import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Outlet } from 'react-router-dom';


export function App() {

  return (
    <>
      <Header />

      <main className='mt-8 sm:mt-16 lg:mt-44 2xl:mt-44'>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
