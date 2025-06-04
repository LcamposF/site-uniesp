import { Container, Card, Row, Col } from "react-bootstrap"
import React from 'react'



const Faculdade = () => {
  return (
    <Container className="py-4">
        <h2 className="mb-4">A Faculdade</h2>

        <Card className="mb-4 shadow-sm"> 
        <Card.Body>
        <p>
        A Faculdade UNIESP é uma instituição comprometida com a excelência no ensino e no desenvolvimento de habilidades para o mercado de trabalho...
        </p>
        <p>
        Nossos cursos são projetados para formar profissionais capacitados e conscientes de seu papel na sociedade...
        </p>
        </Card.Body>
        </Card>
        <Row className="g-4"> 
            <Col md={4}>
        {/* Card1 */}
        <Card className="text-center h-100 shadow-sm">
            <Card.Img
                variant="top"
                src='card1.jpeg'
                alt='Campus Life'
                style={{ height: '200px', objectFit: 'cover'}}
            />
            <Card.Body>
                <Card.Title> 
                    Vida no Campus
                </Card.Title>
                <Card.Text>
                Um ambiente vibrante e acolhedor, com atividades que promovem o desenvolvimento pessoal e social dos alunos. 
                </Card.Text>
            </Card.Body> 
        </Card> </Col>

        <Col md={4}>
        <Card className="text-center h-100 shadow-sm"> 
        <Card.Img
            variant='top'
            src='card2.jpeg'
            alt='Library'
            style={{ height: '200 px', objectFit: 'cover'}}
        />
        <Card.Body>
            <Card.Title>
                Biblioteca
            </Card.Title>
            <Card.Text>
            Uma biblioteca com um acervo completo e atualizado, incluindo livros, revistas e recursos digitais para pesquisa e estudo.
            </Card.Text>
        </Card.Body>

        </Card> 
        </Col>

        <Col md={4}>
        <Card className="text-center h-100 shadow-sm"> 
            <Card.Img
                variant='top'
                src='card3.jpeg'
                alt='Main Building'
                style={{ height: '200 px', objectFit: 'cover'}}
            />
            <Card.Body>
                <Card.Title>
                    Prédio Principal
                </Card.Title>
                <Card.Text>
                O centro de nossa instituição, com salas de aula modernas e laboratórios equipados para atender às necessidades dos cursos.
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        </Row>
    </Container>
  
  )
}

export default Faculdade