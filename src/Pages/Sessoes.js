import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components"
import { Link } from "react-router-dom";



export default function Sessoes() {

    const [day, setDay] = useState([])
    const { idFilme } = useParams();
    const [film, setFilm] = useState([])

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)

        promise.then((res) => {
            setDay(res.data.days)
            setFilm(res.data)
        })

        promise.catch((err) => {
            console.log(err.response.data)
        })

    }, [idFilme])

    return (
        <>
            <Direcionamento>Selecione o horário</Direcionamento>
            {day.map((value, index) => < SelectSession key={index} value={value} />)}
            <ContainerFooter>
                <ContainerChoice>
                    <MovieChoice>
                        <img src={film.posterURL} alt="Poster filme"></img>
                    </MovieChoice>
                    <ContainerTitleAndHour>
                        <p>{film.title}</p>
                    </ContainerTitleAndHour>
                </ContainerChoice>
            </ContainerFooter>
        </>
    )
}

function SelectSession(value) {
    console.log(value.value.showtimes)
    return (
        <>
            <SessaoContainerDay>
                <h6>
                    {value.value.weekday} - {value.value.date}
                </h6>
            </SessaoContainerDay>
            <SessaoContainerHour>
                {value.value.showtimes.map((showtime, index) =>
                    <Link to={`/assentos/${showtime.id}`} key={index}>
                        <button key={index}>
                            {showtime.name}
                        </button>
                    </Link>
                )}
            </SessaoContainerHour>
        </>
    )
}


const Direcionamento = styled.div`
    margin-top: 50px;
    font-size: 24px;
    font-weight: 400;
    color: #293845;
    display:flex;
    justify-content: center;
    padding: 50px 0 30px 0;
    font-family: roboto;
`

const SessaoContainerDay = styled.div`
    padding: 0 30px 0 30px;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 10px;
    h6{
        font-size: 20px;
        font-weight: 400;
        color: #293845;
    }
`

const SessaoContainerHour = styled.div`
    padding: 0 30px 0 30px;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 10px;
    button{
        color: white;
        background-color: #E8833A;
        font-size: 18px;
        font-weight: 400;
        border: none;
        border-radius: 3px;
        width: 80px;
        height: 40px;
        margin-top: 30px;
        margin-bottom: 30px;
        margin-right: 10px;
    }
`
const ContainerFooter = styled.div` 
background-color: #DFE6ED;
box-shadow: 0px -2px 1px 0px #9EADBA;
border-color: transparent;
height: 120px;
width: 50vh;
position: sticky;
bottom: 0;
display: flex;
justify-content: center;
align-items: center;
`
const ContainerChoice = styled.div`
height: 80%;
width: 90%;
display: flex;
align-items: center;
p{
    font-size: 26px;
    font-weight: 400;
    color: #293845;
}
`

const MovieChoice = styled.div`
width:60px;
height: 85px;
background: #FFFFFF;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
align-items: center;
justify-content: center;
display: flex;
margin-right: 30px;
padding-right: 5px;
padding-left: 5px;
img{
    width: 48px;
    height: 72px;
    object-fit: contain;
}
` 
const ContainerTitleAndHour = styled.div`
display: flex;
flex-direction: column;
`