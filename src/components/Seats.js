import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"


export default function Seats(){

    const [banch, setBanch] = useState([])
    const {idSessao} = useParams();
    

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        
        promise.then((res) => {
            console.log(res.data.seats)
            setBanch(res.data.seats)
        })

        promise.catch((err) => {
            console.log(err.response.data)
        })
    
    }, [idSessao])
    
    return(
        <>
            <Direcionamento>Selecione o(s) assento(s)</Direcionamento>

            <ContainerAssentos>
                {banch.map((info) =>  
                    <SelectSeat key={info.id} info={info}>
                        <button>
                            {info.name}
                        </button>
                    </SelectSeat >                
                )}
            </ContainerAssentos>
            <Container>
                <ContainerStatusSeat></ContainerStatusSeat>
                <ContainerStatusSeat></ContainerStatusSeat>
                <ContainerStatusSeat></ContainerStatusSeat>
            </Container>
            <ContainerStatus>
                <p>Selecionado</p>
                <p>Disponível</p>
                <p>Indisponível</p>
            </ContainerStatus>
            
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
const ContainerAssentos = styled.div`
    flex-wrap: wrap;
    display: flex;
    justify-content: space-evenly;
    margin-left: 20px;
    margin-right: 20px;
`
const SelectSeat = styled.div`
    justify-content: space-around;
    padding: 1px;
    button{
        width: 26px;
        height: 26px;
        border-radius: 100px;
        background-color: #C3CFD9;
        border: 1px solid #808F9D;
        margin-top:5px;
        font-size: 11px;
        font-weight: 400;
        color: #000000;
    }
`
const Container =styled.div`
    justify-content: space-around;
    padding: 20px 30px 0px 30px;
    display: flex;
    margin-top: 20px;
`
const ContainerStatusSeat =styled.div`
    background-color: black;
    width: 26px;
    height: 26px;
    border-radius: 100px;
    justify-content: space-between;
    display: flex;

`

const ContainerStatus =styled.div`
    justify-content: space-between;
    padding: 20px 30px 20px 30px;
    display: flex;

`