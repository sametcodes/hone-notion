import React from 'react';

import { Container, EditorTitle } from "../../styled"
import {
    DocumentBar, DocumentStatus, DocumentOwnerAvatar, DocumentBarText,
    DocumentAction, DocumentActionButton, DocumentFlex
} from '../../styled';

interface IDocumentFlexWithSeperators {
    children: React.ReactNode;
}

export const DocumentFlexWithSeperators = ({ children }: IDocumentFlexWithSeperators) => {
    console.log(children);

    return <DocumentFlex>
        {React.Children.map(children, (child, index) => {
            return <>
                {index !== 0 && <DocumentBarText> | </DocumentBarText>}
                {child}
            </>
        })}
    </DocumentFlex>

}

interface IHeader {
    title: string;
}

export const Header = ({ title }: IHeader) => {
    return <>

        <Container>
            <DocumentBar>
                <DocumentFlexWithSeperators>
                    <DocumentStatus>P</DocumentStatus>
                    <DocumentBarText>0 min</DocumentBarText>
                    <DocumentOwnerAvatar
                        src="https://pbs.twimg.com/profile_images/1576978682689765376/hcMUbibY_400x400.jpg"
                    />
                    <DocumentBarText>← 0</DocumentBarText>
                </DocumentFlexWithSeperators>

                <DocumentFlex>
                    <DocumentAction>
                        <DocumentActionButton> 1 </DocumentActionButton>
                        <DocumentActionButton> 2 </DocumentActionButton>
                        <DocumentActionButton> 3 </DocumentActionButton>
                    </DocumentAction>
                </DocumentFlex>
            </DocumentBar>
        </Container>

        <EditorTitle>
            <h1>{title}</h1>
        </EditorTitle>
    </>
}