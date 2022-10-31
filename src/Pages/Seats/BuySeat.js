import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { useForm } from "../../components/useForm"


export default function BuySeat({ selectedSeat, name, setName, CPF, setCPF }) {


    console.log(selectedSeat)
    // const [form, handleForm] = useForm({ name: "", CPF: "" });
    
    const navigate = useNavigate()
    
    function reservedSeats(e) {
        e.preventDefault();

        const ids = selectedSeat.map((seat) => (seat.id))
     
        const body = {
            ids,
            name,
            cpf: CPF
        }

        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"
        const promise = axios.post(URL, body)

        promise.then(res => {
            console.log(res.data)
            console.log("Foi enviado")
            navigate("/sucesso")
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
                    type="text" required
                    placeholder="Digite seu nome..."
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <p>CPF do comprador</p>
                <input
                    type="text" required
                    placeholder="Digite seu CPF..."
                    name="CPF"
                    value={CPF}
                    onChange={(e) => setCPF(e.target.value)}
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

const ContainerForm = styled.form`
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