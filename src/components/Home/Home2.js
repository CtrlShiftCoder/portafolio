import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import myImg from '../../Assets/avatar.svg'
import Tilt from 'react-parallax-tilt'
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              PERMÍTEME <span className='purple'> PRESENTARME </span> !
            </h1>
            <p className='home-about-body'>
              Me enamoré de la programación y al menos he aprendido algo, creo… 🤷‍♂️
              <br />
              <br />
              Me encantas los Clásicos como
              <i>
                <b className='purple'> Java,Php,Python,Javascript...entre otros </b>
              </i>
              <br />
              <br />
              Mis campos de interés son la construcción de nuevos &nbsp;
              <i>
                <b className='purple'>Tecnologías y productos web </b> y también en áreas
                relacionadas con <b className='purple'>ecommerce.</b>
              </i>
              <br />
              <br />
              También me encanta la vanguardía de tecnologías, por eso aplico mi pasión por
              desarrollar productos con <b className='purple'>Node.js</b> y
              <i>
                <b className='purple'> Biblioteca y marcos de Javascript modernos</b>
              </i>
              &nbsp; como
              <i>
                <b className='purple'> Angular,React,NextJs</b>
              </i>
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>Encuentramé</h1>
            <p>
              No dudes en <span className='purple'>contactarte </span>conmigo
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/CtrlShiftCoder'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/ignaciocamilettim'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.instagram.com/ignaciocamilettim'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
