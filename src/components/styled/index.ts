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
    padding: 0 300px;
`;

export const Main = styled.main`
    margin-top: 20px;
`;

export const Textarea = styled.div`
    width: 100%;
    border: 0px;
    resize: none;
    outline: none;
    ::placeholder,
    ::-webkit-input-placeholder { color: transparent; }
    :-ms-input-placeholder { color: transparent; }
    position: relative;
    line-height: 1.5;

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

interface IModal {
    position: { x: number; y: number; }
}

export const Modal = styled.div<IModal>`
    position: absolute;
    height: auto;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: block;
    background-color: #fff;

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

export const EditorTitle = styled(Container)`
    font-size: 3em;
    h1{
        font-size: 1em;
        padding: 0px 0px 20px 0px;
        border-bottom: 2px solid #eee;
    }
`;

export const DocumentBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #eee;
    color: #999;
`;

export const DocumentFlex = styled.div`
    display: flex;
    align-items: center;
`

export const DocumentElement = styled.div`
    position: relative;
    margin-right: 15px;
`

export const DocumentStatus = styled(DocumentElement)`
    background-color: #d9f9e6;
    color: #357559;
    padding: 5px 8px;
    border-radius: 5px;
`

export const DocumentOwnerAvatar = styled.img`
    width: 25px;
    height: 25px;
    position: relative;
    margin-right: 15px;
    border-radius: 50%;
`;

export const DocumentBarText = styled(DocumentElement)`
    font-size: 1em;
    color: #aaa;
`;

export const DocumentAction = styled(DocumentElement)`
    display: flex;
`

export const DocumentActionButton = styled.button`
    background-color: transparent;
    border: 0px;
    cursor: pointer;
    padding: 10px;
    color: #999;
    border-radius: 5px;
    &:hover {
        background-color: #eee;
    }
`;

