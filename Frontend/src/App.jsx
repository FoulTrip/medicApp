import './App.css'
import iconBanner from './assets/bannerIcon.svg'
import ExerciseIcon from './assets/exercise.svg'
import MeditationIcon from './assets/meditation_icon.svg'
import InjuredIcon from './assets/eat.svg'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <main>
        <Navigation />
        <section className='Box'>
          <div className='subBoxTwo'>
            <img src={iconBanner} className='iconBanner' />
          </div>
          <div className='subBoxOne'>
            <p>Encuentra el equilibrio perfecto para tu cuerpo y mente, descubre consejos, recursos y herramientas para llevar una vida saludable y plena en nuestra página dedicada a la salud y el bienestar personal.</p>
            <div className='cards_icons'>
              <div className='card_icon'>
                <img className='exerciseIcon' src={ExerciseIcon} />
                <p>Ejercicio: Fortalece tu cuerpo, mejora tu salud y alcanza tus metas a través del ejercicio regular.</p>
              </div>
            </div>
            <div className='cards_icons'>
              <div className='card_icon'>
                <img className='meditationIcon' src={MeditationIcon} />
                <p>Meditacion: Cuida tu mente, reduce el estrés y cultiva la atención plena para vivir en armonía.</p>
              </div>
            </div>
            <div className='cards_icons'>
              <div className='card_icon'>
                <img className='injuredIcon' src={InjuredIcon} />
                <p>Nutricion: Nutre tu cuerpo, energiza tu mente y vive una vida saludable con una alimentación balanceada</p>
              </div>
            </div>
          </div>
        </section>
        <div className='redireccion'>
          <div className='button'>
            <a href="/blog" className='btn_direccion'><p>Mira nuestro contenido</p></a>
            <i className='bx bx-right-arrow-alt'></i> 
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default App
