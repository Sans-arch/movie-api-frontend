import { FeaturedMovie } from "../components/FeaturedMovie";
import { Footer } from "../components/Footer";
import { NewArrival } from "../components/NewArrival";
import { Container } from "./styles";

export function Layout() {
    return (
        <Container>
            <FeaturedMovie />
            <NewArrival />
            <Footer />
        </Container>
    )
}