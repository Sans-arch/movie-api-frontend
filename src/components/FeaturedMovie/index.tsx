import { BsChevronRight } from 'react-icons/bs';
import { MovieCard } from "../MovieCard";
import { Container, MoviesContainer, Title } from "./styles";

import batmanBeginsImg from '../../assets/images/batman_begins.png';
import dunkirkImg from '../../assets/images/dunkirk.png';
import spidermanImg from '../../assets/images/spiderman.png';
import strangerThingsImg from '../../assets/images/stranger_things.png';

export function FeaturedMovie() {
    return (
        <Container>
            <Title>
                <h2>Featured Movie</h2>
                <p>
                    See more
                    <BsChevronRight />
                </p>
            </Title>

            <MoviesContainer>
                <MovieCard
                    title="Stranger Things"
                    originInfo="USA, 2016 - Current"
                    imgUrl={strangerThingsImg}
                    genres="Action, Adventure, Horror"
                    ratings={{
                        imdb: 86.0,
                        rotten: 97
                    }}
                />
                <MovieCard
                    title="Batman Begins"
                    originInfo="USA, 2005 "
                    imgUrl={batmanBeginsImg}
                    genres="Action, Adventure "
                    ratings={{
                        imdb: 82.0,
                        rotten: 70
                    }}
                />
                <MovieCard
                    title="Spider-Man: Into The Spider Verse"
                    originInfo="USA, 2018 "
                    imgUrl={spidermanImg}
                    genres="Animation, Action, Adventure"
                    ratings={{
                        imdb: 84.0,
                        rotten: 87
                    }}
                />
                <MovieCard
                    title="Dunkirk"
                    originInfo="USA, 2017"
                    imgUrl={dunkirkImg}
                    genres="Action, Drama, History"
                    ratings={{
                        imdb: 78.0,
                        rotten: 94
                    }}
                />
            </MoviesContainer>
        </Container>
    )
}