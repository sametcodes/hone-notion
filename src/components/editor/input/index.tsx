import { forwardRef, useEffect, RefObject } from 'react';
import { Textarea } from '../../styled';

interface IInput {
    createNewInput: () => void;
    deleteInput: () => void;
    sendCommand: (ref: React.ForwardedRef<HTMLDivElement>, text: string) => void;
    value: string;
    type: string;
}

export const Input = forwardRef((props: IInput, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { createNewInput, deleteInput, sendCommand, type, value } = props;
    // TODO: set the cursor to the end when focused

    const target = (ref as RefObject<HTMLDivElement>);

    useEffect(() => {
        if (!target.current) return;
        target.current?.focus();

    }, [type]);

    useEffect(() => {
        if (!target.current) return;

        const movesTheCursorToEnd = () => {
            if (!target.current) return;

            let range = document.createRange();
            let selection = window.getSelection();
            if (!selection) return;

            range.selectNodeContents(target.current);
            range.setStart(target.current.firstChild as Node, target.current.innerText.length);
            range.setEnd(target.current.firstChild as Node, target.current.innerText.length);

            selection.removeAllRanges();
            selection.addRange(range);
        }

        target.current?.addEventListener("focus", movesTheCursorToEnd, false);

        // clear up the event listener when the component unmounts
        return () => {
            target.current?.removeEventListener("focus", movesTheCursorToEnd, false);
        }
    }, [target])


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
            onKeyUp={onKeyUp}>
            {value}
        </Textarea>
    </>
})