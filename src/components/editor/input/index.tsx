import { forwardRef, useEffect, RefObject } from 'react';
import { Textarea } from '../../styled';

interface IInput {
    createNewInput: () => void;
    deleteInput: () => void;
    sendCommand: (ref: React.ForwardedRef<HTMLDivElement>, text: string) => void;
    type: string;
}

export const Input = forwardRef((props: IInput, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { createNewInput, deleteInput, sendCommand, type } = props;

    // TODO: set the cursor to the end when focused
    useEffect(() => {
        const target = (ref as RefObject<HTMLDivElement>);
        target.current?.focus();
    }, [type]);

    const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        // create new input if enter is pressed
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            createNewInput();
        }

        // delete input if backspace is pressed
        if (event.key === "Backspace" && (event.target as HTMLDivElement).innerHTML === "") {
            event.preventDefault();
            deleteInput();
            return;
        };
    }

    const onKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
        const value = (event.target as HTMLDivElement).innerText;
        sendCommand(ref, value);
    }

    return <>
        <Textarea
            ref={ref}
            as={type as any}
            contentEditable={true}
            suppressContentEditableWarning={true}
            placeholder="Type / to search"
            spellCheck={false}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
        />
    </>
})