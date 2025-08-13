import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'
//import logo from './logo.png';
import evento from './eventos.png';
import './App.css'
//https://youtu.be/gMUlquV_LfM?si=be-bsx8agyAvXVcP

function App() {

  const opts = {
    height: '390',
    width: '740',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="min-h-screen bg-black p-4 md:p-8 text-white">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Columna izquierda vacía o para contenido adicional */}
      <div>
        <img src={evento} className="" alt="evento" />
      </div>

      {/* Columna derecha con el contenido formateado */}
      <div className="space-y-6">
        {/* Video responsivo */}

        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
            <ReactPlayer
              src="https://www.youtube.com/watch?v=gMUlquV_LfM"
              className="absolute top-0 left-0"
              width="100%"
              height="100%"
              controls
            />
          </div>

        <header className="bg-gray-900 rounded-lg p-6 shadow-lg">
          <h1 className="text-2xl font-bold mb-2">Eventos de Carreras de Drones en Querétaro</h1>
          <p className="text-gray-300">Viernes y sábado - No te lo pierdas</p>
        </header>

        <section className="bg-gray-800 rounded-lg p-6 shadow">
          <p className="mb-4">
            Hola, para los que no sepan, este viernes y sábado vamos a tener dos eventos de carreras de drones en Querétaro.
          </p>
          <p className="mb-4">
            El viernes vamos a hacer una carrera oficial de MultiGP con el objetivo de practicar la pista del Global Qualifier de Verano de MultiGP. El sábado los que participen tendrán 10 oportunidades de marcar su mejor tiempo en el Track del Global Qualifier, para quedar "rankeados" oficialmente en la Tabla Mundial de MultiGP.
          </p>
          <p>
            Las tecnologías de transmisión de video permitidas son únicamente Análogo y HD Zero.
          </p>
        </section>

        <section className="bg-gray-800 rounded-lg p-6 shadow space-y-4">
          <div>
            Para viernes: <a target="_blank" href="https://www.multigp.com/races/view/?race=30155/MGP-Summer-GQ---Official-Practice-Volume-2" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded inline-block mt-2">Registrar</a>
          </div>
          <div>
            Para sábado: <a target="_blank" href="https://www.multigp.com/races/view/?race=30156/2025Summer-MultiGP-Global-Qualifier-27" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block mt-2">Registrar</a>
          </div>
        </section>

        <section className="bg-gray-800 rounded-lg p-6 shadow">
          <p>
            Por cierto. En una de esas el sábado después de terminar el evento oficial del Global Qualifier de MultiGP, chance y echemos cotorreo con Avatas y Neos. Así que los que anden por la zona el sábado cáiganle.
          </p>
        </section>

        <footer className="grid grid-cols-2 gap-4 text-center">
          <a target="_blank" href="https://maps.app.goo.gl/kaDbsgenaMkwgQMb9?g_st=com.google.maps.preview.copy" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lugar</a>
          <a target="_blank" href="https://www.youtube.com/@QdronRacingTeam" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">En vivo</a>
        </footer>
      </div>
    </div>
  </div>
  );
}

export default App;
