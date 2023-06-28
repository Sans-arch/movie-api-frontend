import { FeaturedMovie } from "../components/FeaturedMovie";
import { NewArrival } from "../components/NewArrival";
import { Container } from "./styles";

export function Layout() {
    return (
        <div>
            <Container>
                <FeaturedMovie />
                <NewArrival />
            </Container>
        </div>
    )
}