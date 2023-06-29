import { FeaturedMovie } from "../components/FeaturedMovie";
import { Footer } from "../components/Footer";
import { MainSlider } from "../components/MainSlider";
import { NewArrival } from "../components/NewArrival";
import { Container } from "./styles";

export function Layout() {
    return (
        <>
            <MainSlider />
            <Container>
                <FeaturedMovie />
                <NewArrival />
                <Footer />
            </Container>
        </>
    )
}