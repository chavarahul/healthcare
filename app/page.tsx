import Navbar from './Components/Navbar'
import PreLoader from './Components/PreLoader'
import About from './Pages/About'
import Hero from './Pages/Hero'
import "../node_modules/boostrap/package.json";
export default function Home() {
  return (
    <main className='w-screen overflow-x-hidden snap'>
      <>
        <PreLoader />
        <section className='section ' >
          <Navbar />
          <Hero />
        </section>
        <About />
      </>
    </main>
  )
}
