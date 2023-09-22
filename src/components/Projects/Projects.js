import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import sea from '../../Assets/Projects/sea.png'
import contratacion from '../../Assets/Projects/contratacion.png'
import uchristus from '../../Assets/Projects/uchristus.png'
import candidaturas from '../../Assets/Projects/candidaturas.png'
import djistore from '../../Assets/Projects/djistore.png'
import registro from '../../Assets/Projects/registro.png'

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          Algunos de mis <strong className='purple'>Trabajos </strong>
        </h1>
        <p style={{ color: 'white' }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={candidaturas}
              isBlog={false}
              title='Candidaturas Online'
              description='Sistema de candidaturas online de los partidos politicos, un paso antes de lo que sale en la papeleta hecho en NodeJs'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={djistore}
              isBlog={false}
              title='DjiStore'
              description='Ecommerce hecho con Magento 2, integrado con un ERP propio de Aligare a través de servicios hechos en Java SpringBoot, y un ERP externo llamado Manager, todo esto montado sobre arquitectura en la nube AWS, confeccionando tambíen reportes PowerBI con servicios en NodeJs y visualizados en Angular 6 estos reportes.'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={uchristus}
              isBlog={false}
              title='Portal Principal UC CHRISTUS'
              description='Migración de Portal Principal de Red de Salud UC Christus, de angular 10 a angular 13, con confección de ETL para la migración de información de Oracle a DynamoDB(AWS).'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={sea}
              isBlog={false}
              title='E-SEIA'
              description='Sistema principal del Servicio de evaluación ambiental que tramite proyectos ambientales y su regulación y tramitación, Front hecho en PHP y back en Java Springboot.'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={contratacion}
              isBlog={false}
              title='Cotización y Contratación Seguro Automotriz Banco Estado'
              description='Módulos de la app principal móvil del Banco Estado, para la cotización y contratación de seguros automotriz (Nodejs,Rxjs,Angular 13)'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={registro}
              isBlog={false}
              title='Registro de Usuarios Clave Única SEA'
              description='Integración de Clave Única para el sistema principal del Servicio de evaluación ambiental.'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
