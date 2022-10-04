import styled from "styled-components"


export default function Header(){
    return(
        <LogoContainer>
            <h1>CINEFLEX</h1>
        </LogoContainer>
    )
}

const LogoContainer = styled.div`
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    display:flex;
    justify-content: center;
    
    h1{
        font-size: 34px;
        font-weight: 400;
        color: #E8833A;
        display: flex;
        align-items: center;
    }
`