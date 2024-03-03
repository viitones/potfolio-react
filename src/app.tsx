import { Header } from './components/Header';
import { Apresentacao } from './components/Apresentacao';
import { Footer } from './components/Footer';


export function App() {

  return (
    <>
      <Header />

      <main className='mt-44'>
        <Apresentacao />
      </main>

      <Footer />
    </>
  )
}
