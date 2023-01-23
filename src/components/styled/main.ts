import styled from 'styled-components';

export const Document = styled.div`
    font-family: 'Roboto', sans-serif;
    color: #333;
`;

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    color: #222;
    padding: 0 30px;
`;

export const Logo = styled.div`
    font-size: 1.5em;
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
`;

export const MenuItem = styled.div`
    margin-left: 20px;
    cursor: pointer;
`;

export const Container = styled.div`
`;

export const Main = styled.main`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: center;
    align-content: center;
    margin: 0px auto;
    width: 50%;

    @media only screen and (max-width: 768px) {
        width: 70%;
    }
    @media only screen and (max-width: 320px) {
        width: 95%;
    }
`;
