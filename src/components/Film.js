import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {Link } from "react-router-dom"

export default function Film() {

    const [movies, setMovies] = useState([])

    useEffect(
        () => {

            const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
            const promise = axios.get(URL)

            promise.then((res) => {
                setMovies(res.data)
            })

            promise.catch((err) => {
                console.log(err.response.data)
            })
        }, []
    )

    if (movies.length === 0) {
        return <Carregando>Carregando...</Carregando>
    }

    return (
        <>
            {movies.map((movie) => < OneFilm key={movie.id} movie={movie} />)}
        </>
    )
}

function OneFilm(movie) {
    return (
        
        <ContainerMovie>
            <Link to = {`/sessoes/${movie.movie.id}`}>
                <img src={movie.movie.posterURL} alt="Poster Filme"></img>
            </Link>    
        </ContainerMovie>
    )
}

const ContainerMovie = styled.div`
padding: 25px;
width:100px;
height: 160px;
background: #FFFFFF;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
align-items: center;
justify-content: center;
display: flex;
margin-bottom: 20px;

img{
    width: 129px;
    height: 193px;
    object-fit: contain;
}
`
const Carregando = styled.div`
font-size: 25px;
justify-content: center;
`