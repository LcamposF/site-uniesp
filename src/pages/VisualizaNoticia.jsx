import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import urlBase from '../services/api'
import axios from 'axios'
import { Card, Container } from 'react-bootstrap'

const VisualizaNoticia = () => {

    const { id } = useParams ()
    const [noticia, setNoticia] = useState ({})

    useEffect (() => {
        axios.get(`${urlBase}/${id}`)
        .then(resonse => setNoticia(resonse.data)) 
        .catch(error => console.error('Erro ao obter a noticia: ', error))
    }, [id])


  return (
    <Container className='py-4'>
        <Card className='shadow-sm'>
        <Card.Body>
            <Card.Title> {noticia.titulo}</Card.Title>
            <Card.Text> {noticia.texto}</Card.Text>
        </Card.Body>

        </Card>
    </Container>
  )
}

export default VisualizaNoticia