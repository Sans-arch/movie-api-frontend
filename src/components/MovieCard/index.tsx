import { Container } from "./styles";

interface IMovieCard {
    title: string;
    imgUrl: string;
    originInfo: string;
}

export function MovieCard({ title, imgUrl, originInfo }: IMovieCard) {
    return (
        <Container>
            <img src={imgUrl} alt={title} />
            <span>{originInfo}</span>
            <p>{title}</p>
        </Container>
    )
}