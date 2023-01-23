import styled from "styled-components";

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


export const ModalList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const ModalListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    &:hover {
        background-color: #ccc;
    }
`;

export const ModalListItemName = styled.span`
`;