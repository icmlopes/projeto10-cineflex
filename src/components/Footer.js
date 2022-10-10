import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Footer(){

    const [film, setFilm] = useState(null)
    const {idFilme} = useParams();
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
    
        promise.then((res) => {
            setFilm(res.data)
        })  

        promise.catch((err) => {
            console.log(err.response.data)
        })

    }, [idFilme]) 
    
    if (film === null) {
        return <div>Carregando...</div>
    }

    return(
        <>            
            <PosterChoice value={film}/>  
        </>
    )
}

function PosterChoice ({value}){
    return(
        <>
            <ContainerFooter>
                <ContainerChoice>
                    <MovieChoice>
                        <img src={value.posterURL} alt="Poster filme"></img>
                    </MovieChoice>
                        <p>{value.title}</p>
                </ContainerChoice>
            </ContainerFooter>
        </>
    )
}


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