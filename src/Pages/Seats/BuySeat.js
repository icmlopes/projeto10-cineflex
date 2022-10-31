import axios from "axios";
import styled from "styled-components"
import { useForm } from "../../components/useForm"


export default function BuySeat({ selectedSeat }) {


    console.log(selectedSeat)
    // const [form, handleForm] = useForm({ name: "", CPF: "" })


    function reservedSeats(e) {
        e.preventDefault();

        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"
        const promise = axios.post(URL) //form)

        promise.then(res => {
            console.log(res.data)
        })

        promise.catch((err) => {
            console.log(err.response.data)
        })
    }

    return (
        <ContainerBuyer>
            <ContainerForm onSubmit={reservedSeats}>
                <p>Nome do comprador</p>
                <input
                    type="text"
                    placeholder="Digite seu nome..."
                    name="name"
                // value={(form.name)}
                // onChange={handleForm}
                />

                <p>CPF do comprador</p>
                <input
                    type="text"
                    placeholder="Digite seu CPF..."
                    name="CPF"
                // value={(form.CPF)}
                // onChange={handleForm}
                />
                <ContainerButton>
                    <Button>
                        Reserver assento(s)
                    </Button>
                </ContainerButton>
            </ContainerForm>
        </ContainerBuyer>
    )
}

const ContainerBuyer = styled.div`
padding: 20px;
`

const ContainerForm = styled.div`
input{
    width:95%;
    height: 51px;
    border: solid 1px #d4d4d4;
    font-size: 18px;
    padding: 10px;
}
p{
    font-size: 21px;
    font-weight: 400;
    color: #293845;
    margin-top: 20px;
    margin-bottom:5px;
}
`

const ContainerButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 20px;
`

const Button = styled.button`
margin-top: 50px;
border: none;
border-radius: 3px;
background-color: #E8833A;
width: 225px;
height: 42px;
color: #FFF;
font-size: 21px;
font-weight: 400;
`