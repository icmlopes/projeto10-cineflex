import Film from "./Film"
import styled from "styled-components";


export default function Main() {

    return (
        <ContainerFilms>
                <Film/>
        </ContainerFilms>
    )
}

const ContainerFilms = styled.div`
width: 100%;
height: 100%;
justify-content: space-evenly;
display: flex;
flex-wrap: wrap;
`
