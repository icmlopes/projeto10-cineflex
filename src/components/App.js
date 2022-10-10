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

// const SelectSeat = styled.div`
//     padding: 0 30px 0 30px;
//     display: flex;
//     flex-wrap:wrap;
//     justify-content: space-evenly;
//     button{
//         width: 26px;
//         height: 26px;
//         border-radius: 100px;
//         background-color: #C3CFD9;
//         border: 1px solid #808F9D;
//         margin-top:5px;
//         font-size: 11px;
//         font-weight: 400;
//         color: #000000;
//     }
// `
// const ContainerStatus =styled.div`
//     justify-content: space-between;
//     padding: 20px 30px 20px 30px;

// `

