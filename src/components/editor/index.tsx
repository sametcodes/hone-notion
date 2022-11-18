import { useRef, useState, createRef, forwardRef, useEffect, RefObject, ReactEventHandler } from 'react';
import { createTextChangeRange } from 'typescript';
import { Textarea, Container } from '../styled'

export const Editor = () => {
    const [refs, setRefs] = useState<{ link: React.RefObject<HTMLDivElement>; type: string; }[]>(
        new Array(1).fill(0).map(() => ({ link: createRef<HTMLDivElement>(), type: "div" }))
    );

    return <>
        <Flow refs={refs} setRefs={setRefs} />
    </>
}

interface IFlow{
    children?: React.ReactNode;
    refs: {
        link: React.RefObject<HTMLDivElement>;
        type: string;
    }[];
    setRefs: React.Dispatch<React.SetStateAction<{
        link: React.RefObject<HTMLDivElement>;
        type: string;
    }[]>>;
}

export const Flow = ({ refs, setRefs }: IFlow) => {

    const inputsContainerRef = useRef<HTMLDivElement>(null);

    const createNewInput = (id: number) => {
        if (refs.length - 1 === id) setRefs((refs) => [...refs, { link: createRef<HTMLDivElement>(), type: "div" }]);
        if (refs.length - 1 > id) refs[id + 1].link.current?.focus();
    }

    const deleteInput = (id: number) => {
        if (refs.length <= 1) return;

        setRefs(refs => refs.filter((_, i) => i !== id));
        refs[id - 1].link.current?.focus();
    }

    const onClickInputContainer = (event: React.MouseEvent<HTMLDivElement>, id: number) => {
        event.preventDefault();
        refs[id].link.current?.focus();
    }

    const onClickEditor = (event: React.MouseEvent<HTMLDivElement>) => {
        // focus on the last input if clicked outside of the inputs
        if (!inputsContainerRef?.current?.contains(event.target as HTMLDivElement)) {
            refs[refs.length - 1].link.current?.focus();
        }

        setRefs(refs => refs.map(ref => ({ ...ref, type: "h1" })));
    }

    return <div onClick={onClickEditor} style={{ paddingBottom: "500px" }}>
        <div ref={inputsContainerRef}>
            {refs.map((ref, id) =>
                <Container key={id} onClick={(event) => onClickInputContainer(event, id)}>
                    <Input
                        ref={ref.link}
                        type={ref.type}
                        createNewInput={createNewInput.bind(this, id)}
                        deleteInput={deleteInput.bind(this, id)}
                    />
                </Container>
            )}
        </div>
    </div>
}

interface IInput {
    createNewInput: () => void;
    deleteInput: () => void;
    type: string;
}

export const Input = forwardRef((props: IInput, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { createNewInput, deleteInput, type } = props;

    // TODO: set the cursor to the end when focused
    useEffect(() => {
        (ref as RefObject<HTMLDivElement>).current?.focus();
    }, [])

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
        }
    }

    return <>
        <Textarea
            ref={ref}
            as={type as any}
            contentEditable={true}
            suppressContentEditableWarning={true}
            placeholder="Type here..."
            spellCheck={false}
            onKeyDown={onKeyDown} />
    </>
})
