import styled from "styled-components";
import GlobalStyle from "../assets/GlobalStyle";
import Header from "../components/Header"
import Main from "./Main";

export default function App(){
    return(
        <>
            <ScreenContainer>
                <GlobalStyle/>
                <Header/>
                <Main />
            </ScreenContainer>
        </>
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

// CSS da segunda tela do figma!!

/* <SessaoContainer>
<h6>
    Quinta-feira - 24/06/2021   
</h6>
<button>
    15:00
</button>
</SessaoContainer> */

// const SessaoContainer = styled.div`
//     padding: 0 30px 0 30px;
//     align-items: flex-start;
//     justify-content: flex-start;
//     h6{
//         font-size: 20px;
//         font-weight: 400;
//         color: #293845;
//         padding: 20px 0;
//     }
//     button{
//         color: white;
//         background-color: #E8833A;
//         font-size: 18px;
//         font-weight: 400;
//         border: none;
//         border-radius: 3px;
//         width: 80px;
//         height: 40px;
//     }
// `