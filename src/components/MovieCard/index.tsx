import { Container, Content, Genre, ImdbRating, Rating, RottenTomatoesRating } from "./styles";

import imdbImg from '../../assets/images/imdb.png';
import rottenTomatoesImg from '../../assets/images/rotten_tomatoes.png';

interface IMovieCard {
    title: string;
    imgUrl: string;
    originInfo: string;
    genres: string;
    ratings: {
        imdb: number;
        rotten: number;
    }
}

export function MovieCard({ title, imgUrl, originInfo, genres, ratings }: IMovieCard) {
    const formattedImdbRating = ratings.imdb.toPrecision(3);

    return (
        <Container>
            <img src={imgUrl} alt={title} />
            <Content>
                <span>{originInfo}</span>
                <p>{title}</p>

                <Rating>
                    <ImdbRating>
                        <img id="imdbImage" src={imdbImg} alt="IMDb logo" />
                        <span>{`${formattedImdbRating}/100`}</span>
                    </ImdbRating>

                    <RottenTomatoesRating>
                        <img id="rottenTomatoesImage" src={rottenTomatoesImg} alt="Rotten Tomatoes logo" />
                        <span>{`${ratings.rotten}%`}</span>
                    </RottenTomatoesRating>
                </Rating>

                <Genre>{genres}</Genre>
            </Content>
        </Container>
    )
}