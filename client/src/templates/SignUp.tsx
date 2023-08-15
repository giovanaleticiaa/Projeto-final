import { styled } from "styled-components";
import SignUpForm from "../components/SignUpForm";

const Container = styled.div`
background-image: linear-gradient(to right, #9796f0, #fbc7d4);
height: 100vh;
display: grid;
place-content: center;
position: relative;
overflow: hidden;
`

export default () => <>
    <Container>
        <SignUpForm />
    </Container>
</>