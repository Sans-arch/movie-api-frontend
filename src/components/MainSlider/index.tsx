import { Container, Logo, Navbar } from "./styles";

import tvLogo from "../../assets/logo/tv.png";

export function MainSlider() {
    return (
        <Container>
            <Navbar>
                <Logo>
                    <img src={tvLogo} alt="Logotipo" />
                    <h2>MovieAPI</h2>
                </Logo>
            </Navbar>
        </Container>
    );
}