import styled from "styled-components";
import GlobalStyle from "../assets/GlobalStyle";
import Header from "../components/Header"
import Firstpage from "./FirstPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sessoes from "./Sessoes";
import Seats from "./Seats";

export default function App() {
    return (
        <BrowserRouter>
            <ScreenContainer>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path="/" element={<Firstpage />} />
                    <Route path="/sessoes/:idFilme" element={<Sessoes/>}/>
                    <Route path="/assentos/:idSessao" element={<Seats/>}/>
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



