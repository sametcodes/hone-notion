import React, { ReactElement } from 'react';

import { Container, EditorTitle } from "../../styled"
import {
    DocumentBar, DocumentStatus, DocumentOwnerAvatar, DocumentBarText,
    DocumentAction, DocumentActionButton, DocumentFlex
} from '../../styled';

interface IDocumentFlexWithSeperators {
    children: React.ReactNode;
}

export const DocumentFlexWithSeperators = ({ children }: IDocumentFlexWithSeperators) => {
    return <DocumentFlex>
        {React.Children.map(children, (child, index) => {
            return <>
                {child}
                <DocumentBarText hideMobile={(child as ReactElement).props.hideMobile} 
                    className="seperator"> | </DocumentBarText>
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
                    <DocumentBarText hideMobile>0 min</DocumentBarText>
                    <DocumentOwnerAvatar
                        src="https://pbs.twimg.com/profile_images/1576978682689765376/hcMUbibY_400x400.jpg"
                    />
                    <DocumentBarText hideMobile>← 0</DocumentBarText>
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