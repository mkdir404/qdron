import YouTube from 'react-youtube';
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
    <div className="App-header ">
      <div className="columns-2 p-10">        
        <div className='w-50'>
          <img src={evento} className="" alt="evento" />
        </div>
        <div>
        <YouTube videoId="gMUlquV_LfM" opts={opts} />
          <p  className='p-4'>
          Hola , para los que no sepan, este viernes y sábado vamos a tener dos eventos de carreras de drones en Querétaro.
          <p  className='p-4'>
            </p>
            El viernes vamos a hacer una carrera oficial de MultiGP con el objetivo de practicar la pista del Global Qualifier de Verano de MultiGP El sábado los que particiean tendrán 10 oportunidades de marcar su mejor tiempo en el Track del Global Qualifier, para quedar "rankeados" oficialmente en la Tabla Mundial de MultiGP.
            </p>          
          <p className='p-4'>
              Las tecnologías de transmisión de video permitidas son únicamente Análogo y HD Zero.
              <p className='p-4'>
                Para viernes: <a target="_blank"  href="https://www.multigp.com/races/view/?race=30155/MGP-Summer-GQ---Official-Practice-Volume-2" className="bg-orange-500 hover:bg-oragne-700 text-white font-bold py-2 px-4 rounded">Registrar</a>
              </p>                
              <p className='p-4'>
              Para sábado: <a target="_blank"  href="https://www.multigp.com/races/view/?race=30156/2025Summer-MultiGP-Global-Qualifier-27" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Registrar</a>
              </p>
              <p className='p-4' >
              Por cierto. En una de esas el sábado después de terminar el evento oficial del Global Qualifier de MultiGP, chance y echemos cotorreo con Avatas y Neos. Así que los que anden por la zona el sábado cáiganle</p>
              </p>
          
          <div className="grid grid-cols-2 gap-1 text-center">            
            <a target="_blank"  href="https://maps.app.goo.gl/kaDbsgenaMkwgQMb9?g_st=com.google.maps.preview.copy" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lugar</a>        
            <a target="_blank" href="https://www.youtube.com/@QdronRacingTeam" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">En vivo</a>
        </div>   
        </div>            
      </div>
    </div>
  );
}

export default App;
