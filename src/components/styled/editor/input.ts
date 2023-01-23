import styled from 'styled-components';

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
    margin: 10px 0px;

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