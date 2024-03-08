import { Header } from './components/Header';
import { Apresentacao } from './components/Apresentacao';
import { Footer } from './components/Footer';


export function App() {

  return (
    <>
      <Header />

      <main className='mt-8 sm:mt-16 lg:mt-44 2xl:mt-44'>
        <Apresentacao />
      </main>

      <Footer />
    </>
  )
}
