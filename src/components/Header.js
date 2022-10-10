import styled from "styled-components"


export default function Header() {
    return (
        <>
            <LogoContainer>
                <h1>CINEFLEX</h1>
            </LogoContainer>
        </>
    )
}

const LogoContainer = styled.div`
    width: 50vh;
    height: 67px;
    background-color: #C3CFD9;
    display:flex;
    justify-content: center;
    position: fixed;
    top: 0;
    h1{
        font-size: 34px;
        font-weight: 400;
        color: #E8833A;
        display: flex;
        align-items: center;
    }
`
