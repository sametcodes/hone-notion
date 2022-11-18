import styled from 'styled-components';

export const Document = styled.div`
    font-family: 'Roboto', sans-serif;
`;


export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background: #222;
    color: #fff;
    padding: 0 200px;
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
    padding: 0 200px;
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