import { Link } from "react-router-dom"
import styled from "styled-components"

export default function SuccessPage({ selectedSeat, name, CPF, film, dates, hour }) {


    return (

        <>

            <Direcionamento>Pedido feito com sucesso!</Direcionamento>
            <FilmAndSession>
                <h2>Filme e sessão</h2>
                <h3> {film.title}</h3>
                <h4> {dates.date} {hour.name}</h4>
            </FilmAndSession>
            <Ticket>
                <h2>Ingressos</h2>
                {selectedSeat.map((seat, index) => (
                    <h3 key={index}> Assento {seat.name} </h3>
                ))}

            </Ticket>
            <Buyer>
                <h2>Comprador</h2>
                <h4>Nome: {name}</h4>
                <h4>CPF: {CPF}</h4>
            </Buyer>

            <ContainerButton>
                <Link to={"/"}>
                    <Button>
                        Voltar para Home
                    </Button>
                </Link>
            </ContainerButton>

        </>
    )
}

const Direcionamento = styled.div`
    margin-top: 70px;
    font-size: 24px;
    font-weight: 700;
    color: #247A6B;
    display:flex;
    justify-content: center;
    padding: 50px 0 30px 0;
    margin-left: 100px;
    margin-right: 100px;
    text-align:center;
    margin-bottom: 30px;
`
const FilmAndSession = styled.div`
    padding: 0 30px 0 30px;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 10px;
    h2{
        font-size: 24px;
        font-weight: 700;
        color: #293845;
        margin-bottom: 20px;
    }
    h3{
        font-size: 22px;
        font-weight: 400;
        color: #293845;
        margin-bottom: 10px;
    }
    h4{
        font-size: 22px;
        font-weight: 400;
        color: #293845;
        margin-bottom: 30px;
    }
`
const Ticket = styled.div`
    padding: 0 30px 0 30px;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 10px;
    h2{
        font-size: 24px;
        font-weight: 700;
        color: #293845;
        margin-bottom: 20px;
    }
    h3{
        font-size: 22px;
        font-weight: 400;
        color: #293845;
        margin-bottom: 10px;
    }
    h4{
        font-size: 22px;
        font-weight: 400;
        color: #293845;
        margin-bottom: 30px;
    }
`
const Buyer = styled.div`
    padding: 0 30px 0 30px;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 30px;
    h2{
        font-size: 24px;
        font-weight: 700;
        color: #293845;
        margin-bottom: 20px;
    }
    h4{
        font-size: 22px;
        font-weight: 400;
        color: #293845;
        margin-bottom: 10px;
    }
`

const ContainerButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Button = styled.button`
margin-top: 80px;
border: none;
border-radius: 3px;
background-color: #E8833A;
width: 225px;
height: 42px;
color: #FFF;
font-size: 21px;
font-weight: 400;
`