import { Container, Logo, Navbar, Searchbar, SignIn } from "./styles";

import { LuCircleEqual } from "react-icons/lu";

import tvLogo from "../../assets/logo/tv.png";

export function MainSlider() {
    return (
        <Container>
            <Navbar>
                <Logo>
                    <img src={tvLogo} alt="Logotipo" />
                    <h2>MovieAPI</h2>
                </Logo>

                <Searchbar>
                    <input type="text" placeholder="What do you want to watch?" />
                </Searchbar>

                <SignIn>
                    <span>Sign in</span>
                    <LuCircleEqual />
                </SignIn>
            </Navbar>
        </Container>
    );
}