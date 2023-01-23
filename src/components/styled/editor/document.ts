import styled from "styled-components";
import { Container } from "../main";

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

interface IDocumentElement {
    hideMobile?: boolean;
}

export const DocumentElement = styled.div<IDocumentElement>`
    position: relative;
    margin-right: 15px;

    @media only screen and (max-width: 720px) {
        display: ${props => props.hideMobile ? 'none !important' : 'block'};
    }
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

interface IDocumentBarText {
    hideMobile: boolean;
}

export const DocumentBarText = styled(DocumentElement) <IDocumentBarText>`
    font-size: 1em;
    color: #aaa;
    display: block;

    &.seperator{
        @media only screen and (max-width: 720px) {
            display: ${props => props.hideMobile ? 'none !important' : 'block'};
        }
    }

    &:not([style*="display: none"]):last-child{
        display: none;
    }
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

export const DocumentSeperator = styled.span`
    color: #ccc;
    font-size: 1.2em;
    padding-right: 15px;
`