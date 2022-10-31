import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import BuySeat from "./BuySeat"


export default function Seats({selectedSeat, setSelectedSeat, name, setName, CPF, setCPF, film, setFilm, dates, setDates, hour,setHour}) {

    const [banches, setbanches] = useState([])
    const { idSessao } = useParams();
    const indisponivel = {background: '#FBE192', border: "#F7C52B"};
    const disponivel = {background:'#C3CFD9', border: "#7B8B99"};
    const selecionado = {background: '#1AAE9E', border: "#0E7D71"};


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)

        promise.then((res) => {
            console.log(res.data.seats)
            setbanches(res.data.seats)
            setFilm(res.data.movie)
            setDates(res.data.day)
            setHour(res.data)
            
        })

        

        promise.catch((err) => {
            console.log(err.response.data)
        })

    }, [idSessao])

    function handleSeat(s){

        if (s.isAvailable === false) {
            alert("Esse acento não está disponível")
        }
        else {
            const wasClicked = selectedSeat.some((seat) => seat.id === s.id)
            if (wasClicked === true) {
                console.log(s)
                console.log(selectedSeat)
                const filteredSeats =  selectedSeat.filter((seat) => (s.id !== seat.id))
                console.log(filteredSeats)
                
                setSelectedSeat([filteredSeats]);
                
                return;
            }
            
            else {
                setSelectedSeat([...selectedSeat, s]);
            }
            return;
        }
    }

    // console.log(selectedSeat)


    return (
        <>
            <Direcionamento>Selecione o(s) assento(s)</Direcionamento>

            <ContainerA>
                <ContainerAssentos>
                    {banches.map((b) =>
                        <SelectSeat 
                        key={b.id} 
                        onClick={() => handleSeat(b)}
                        available = {b.isAvailable}
                        isSelected = {selectedSeat.some((seat) => seat.id === b.id)}
                        film={film}
                        >
                            <button type="button">
                                {b.name}
                            </button>
                        </SelectSeat >
                        
                    )}

                </ContainerAssentos>
            </ContainerA>

            <Container>
                <ContainerStatusSeat cor={selecionado} />
                <ContainerStatusSeat cor={disponivel} />
                <ContainerStatusSeat cor={indisponivel} />
            </Container>
            <ContainerStatus>
                <p>Selecionado</p>
                <p>Disponível</p>
                <p>Indisponível</p>
            </ContainerStatus>
            <BuySeat 
            selectedSeat = {selectedSeat}
            name={name}
            setName={setName}
            CPF= {CPF}
            setCPF={setCPF}
            />
            <ContainerFooter>
                <ContainerChoice>
                    <MovieChoice>
                        <img src={film.posterURL} alt="Poster filme"></img>
                    </MovieChoice>
                    <ContainerTitleAndHour>
                        <p>{film.title}</p>
                        <p>{dates.weekday} - {hour.name}</p>
                    </ContainerTitleAndHour>
                </ContainerChoice>
            </ContainerFooter>

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

const ContainerA = styled.div`
padding-left: 30px;
padding-right: 30px;
`

const ContainerAssentos = styled.div`
    flex-wrap: wrap;
    display: flex;
    justify-content: space-evenly;
    margin-left: 20px;
    margin-right: 20px;
    margin: 0 auto;
`
const SelectSeat = styled.div`
    justify-content: space-around;
    padding: 5px;
    button{
        width: 26px;
        height: 26px;
        border-radius: 100px;
        background-color: ${({available, isSelected}) => available === false ?  "#FBE192" : isSelected === true ? "#1AAE9E" : "#C3CFD9" };
        border: 1px solid;
        border-color: ${({available}) => available === false ?  "#F7C52B" : "#7B8B99" };
        margin-top:5px;
        font-size: 11px;
        font-weight: 400;
        color: #000000;
    }
`

const Container = styled.div`
    justify-content: space-around;
    padding: 20px 30px 0px 30px;
    display: flex;
    margin-top: 20px;
`
const ContainerStatusSeat = styled.div`
    background-color: ${props => props.cor.background};
    width: 26px;
    height: 26px;
    border-radius: 100px;
    border: 1px solid;
    border-color: ${props => props.cor.border};
    justify-content: space-between;
    display: flex;

`

const ContainerStatus = styled.div`
    justify-content: space-around;
    padding: 20px 30px 20px 30px;
    display: flex;

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
p{
    margin-top:5px;
}
`
