import styled from "styled-components";
import GlobalStyle from "../assets/GlobalStyle";
import Header from "../components/Header"

export default function App(){
    return(
        <>
            <ScreenContainer>
                <GlobalStyle/>
                <Header/>
                <h4>Selecione o filme</h4>
            </ScreenContainer>
        </>
    )
}

const ScreenContainer = styled.div`
    background-color: #E5E5E5;
    width: 50vh;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction:column;
    margin: 0 auto;
    h4{
        font-size: 24px;
        font-weight: 400;
        color: #293845;
        padding: 50px 0;
    }
`