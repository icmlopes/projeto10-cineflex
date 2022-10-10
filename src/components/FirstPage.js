import Film from "./Film"
import styled from "styled-components";


export default function FirstPage() {

    return (
        <>
            <Direcionamento>Selecione o filme</Direcionamento>
            <ContainerFilms>
                <Film />
            </ContainerFilms>
        </>
    )
}

const ContainerFilms = styled.div`
width: 100%;
height: 100%;
justify-content: space-evenly;
display: flex;
flex-wrap: wrap;

`
const Direcionamento = styled.div`
    margin-top: 50px;
    font-size: 24px;
    font-weight: 400;
    color: #293845;
    display:flex;
    justify-content: center;
    padding: 50px 0 30px 0;
`