import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 250px;

    /* border: 2px solid green; */

    img {
        width: 250px;
    }

    span {
        color: #9CA3AF;
        font-weight: 700;
        font-size: 12px;
        margin-bottom: 12px;
    }

    p {
        color: #111827;
        font-size: 18px;
        font-weight: 700;
    }
`;