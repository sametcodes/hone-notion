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
    padding: 0 305px;
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
    padding: 0 300px;
`;

export const Main = styled.main`
    margin-top: 20px;
`;

export const Textarea = styled.div`
    width: 100%;
    border: 0px;
    padding: 5px;
    margin: 5px 0px;
    resize: none;
    outline: none;
    ::placeholder,
    ::-webkit-input-placeholder { color: transparent; }
    :-ms-input-placeholder { color: transparent; }
    position: relative;

    &:focus {
        ::placeholder,
        ::-webkit-input-placeholder { color: #aaa; }
        :-ms-input-placeholder { color: #aaa; }

        &[placeholder]:empty:before {
            content: attr(placeholder);
            position: absolute;
            left: 5px;
            color: #aaa;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            max-width: 100%;
            direction: ltr;
        }
    }
`;

interface IModal{
    position: { x: number; y: number; }
}

export const Modal = styled.div<IModal>`
    position: absolute;
    height: auto;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: block;

    top: ${props => props.position.y + 40}px;
    left: ${props => props.position.x}px;
`;


export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const ListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    &:hover {
        background-color: #ccc;
    }
`;