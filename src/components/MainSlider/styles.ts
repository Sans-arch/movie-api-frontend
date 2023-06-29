import styled from 'styled-components';

import johnWickPoster from '../../assets/poster/john_wick_poster.png';

export const Container = styled.div`
    background-image: url(${johnWickPoster});
    background-repeat: no-repeat;
    background-size: cover;

    width: 100%;
    height: 600px;
    margin-bottom: 70px;
`;

export const Navbar = styled.nav`
    display: flex;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;

    h2 {
        color: #fff;
        font-size: 24px;
        font-weight: 700;
        line-height: 24px;
    }
`;