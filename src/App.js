import styled from "styled-components";
import GlobalStyle from "./assets/GlobalStyle";
import Header from "./components/Header"
import Firstpage from "./Pages/FirstPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sessoes from "./Pages/Sessoes";
import Seats from "./Pages/Seats/Seats";
import SuccessPage from "./Pages/SuccessPage";
import { useState } from "react";


export default function App() {

    const [selectedSeat, setSelectedSeat] = useState([])
    const [name, setName] = useState("")
    const [CPF, setCPF] = useState("")
    const [film, setFilm] = useState([])
    const [dates, setDates] = useState([])
    const [hour,setHour] = useState([])

    return (
        <BrowserRouter>
            <ScreenContainer>
                <GlobalStyle />
                <Header />
                    <Routes>
                        <Route path="/" element={<Firstpage />} />
                        <Route path="/sessoes/:idFilme" element={<Sessoes />} />
                        <Route path="/assentos/:idSessao" element={<Seats 
                        selectedSeat={selectedSeat}
                        setSelectedSeat={setSelectedSeat}
                        name={name}
                        setName={setName}
                        CPF={CPF}
                        setCPF={setCPF}
                        film={film}
                        setFilm={setFilm}
                        dates={dates}
                        setDates={setDates}
                        hour={hour}
                        setHour={setHour}
                        />} />
                        <Route path="/sucesso" element={<SuccessPage
                        selectedSeat={selectedSeat}
                        name={name}
                        CPF={CPF}
                        film={film}
                        dates={dates}  
                        hour={hour}
                        />} />
                    </Routes>
            </ScreenContainer>
        </BrowserRouter>
    )
}

const ScreenContainer = styled.div`
    background-color: #E5E5E5;
    width: 50vh;
    min-height: 108vh;
    display: flex;
    flex-direction:column;
    margin: 0 auto;
`



