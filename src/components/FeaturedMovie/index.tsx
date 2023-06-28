import { MovieCard } from "../MovieCard";
import { Container, MoviesContainer } from "./styles";

import batmanBeginsImg from '../../assets/images/batman_begins.png';
import dunkirkImg from '../../assets/images/dunkirk.png';
import spidermanImg from '../../assets/images/spiderman.png';
import strangerThingsImg from '../../assets/images/stranger_things.png';

export function FeaturedMovie() {
    return (
        <Container>
            <h2>Featured Movie</h2>

            <MoviesContainer>
                <MovieCard
                    title="Stranger Things"
                    originInfo="USA, 2016 - Current"
                    imgUrl={strangerThingsImg}
                />
                <MovieCard
                    title="Batman Begins"
                    originInfo="USA, 2005 "
                    imgUrl={batmanBeginsImg}
                />
                <MovieCard
                    title="Spider-Man: Into The Spider Verse"
                    originInfo="USA, 2018 "
                    imgUrl={spidermanImg}
                />
                <MovieCard
                    title="Dunkirk"
                    originInfo="USA, 2017"
                    imgUrl={dunkirkImg}
                />
            </MoviesContainer>
        </Container>
    )
}