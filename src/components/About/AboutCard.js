import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImPointRight } from 'react-icons/im'

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hola a todos!, Soy<span className='purple'> Ignacio Camiletti! </span>
            de <span className='purple'> Quilpué, Chile.</span>
            <br />
            Soy Desarrollador web hace 7 años. Mis inicios, Comencé realizando sitios web para
            empresas como el{' '}
            <span className='purple'>Servicio de Evaluación Ambiental (SEA) , </span>
            <span className='purple'>Aligare (StartUp)</span> realizando proyectos para{' '}
            <span className='purple'>DjiStore</span> que es una reconocida empresa de drones ,
            Cencosud (Empresa Gigantesca de retail),<span className='purple'> Cencosud</span>{' '}
            realizando modelados estrellas en conjunto con soluciones{' '}
            <span className='purple'>PowerBI</span> confeccionando reportes para la correcta toma de
            desiciones. Me mantuve ligado siempre a la innovación y vanguardia en el uso de
            tecnologías, siendo pionero en el equipo DYNAMO de Desarrollo e innovación de productos.
            Posteriormente volví a trabajar con el gobierno especificamente para{' '}
            <span className='purple'>SERVEL</span>, desarrollando en conjunto con un gran equipo el
            <span className='purple'> Sistema de Candidaturas Online del gobierno</span> . Una vez
            términado el Sistema de Candidaturas, me uní al equipo de{' '}
            <span className='purple'>Red de Salud UC Christus</span>, en donde estuvimos{' '}
            <span className='purple'>
              migrando el portal principal de la red de salud de Angular 10 a Angular 13
            </span>
            . Ya finalizando, me integré a la celula de desarrollo de{' '}
            <span className='purple'>Banco de Chile Inversiones</span> en el cual estuve en un
            proyecto donde migramos 23 aplicaciones hechas en Java con Jsp, a Angular 13 y Java
            SpringBoot. Por último pero no menos importante llegué al{' '}
            <span className='purple'>Banco Estado </span>, que es donde trabajo actualmente donde
            estoy ligado a la celula de seguros, donde ya logré con mi equipo de trabajo crear el
            flujo de <span className='purple'>Cotización y Contratación de seguro Automotriz</span>
            ... flujo que se visualiza a través de la aplicación que usan todas las personas en su
            móvil.
            <br />
            <br />
            Dejo adjuntos los sitios de las empresas para las cuales he trabajado
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> <a href='https://www.sea.gob.cl/'>SEA</a>
            </li>
            <li className='about-activity'>
              <ImPointRight /> <a href='https://www.aligare.cl/'>ALIGARE STARTUP</a>
            </li>
            <li className='about-activity'>
              <ImPointRight /> <a href='https://www.cencosud.com/'>CENCOSUD</a>
            </li>
            <li className='about-activity'>
              <ImPointRight /> <a href='https://www.dji.com/es'>DJI STORE</a>
            </li>
            <li className='about-activity'>
              <ImPointRight />
              WECANSYSTEMS (PIEPLUS) relacionado con la educación.
            </li>
            <li className='about-activity'>
              <ImPointRight /> <a href='https://www.ucchristus.cl/'>Red de Salud UC CHRISTUS</a>
            </li>
            <li className='about-activity'>
              <ImPointRight />
              <a href='https://ww2.banchileinversiones.cl/'>Banco de Chile (Inversiones)</a>
            </li>
            <li className='about-activity'>
              <ImPointRight /> <a href='https://www.servel.cl/'>Banco Estado</a>
            </li>
            <li className='about-activity'>
              <ImPointRight /> <a href='https://www.bancoestado.cl/'>SERVEL</a>
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "¡Esfuércese por construir cosas que marquen la diferencia!"{' '}
          </p>
          <footer className='blockquote-footer'>Ignacio Camiletti</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
