import { useRef, createRef, RefObject } from 'react';
import { Container } from '../../styled'
import { Input } from '../input';

interface IFlow {
    children?: React.ReactNode;
    lines: {
        link: React.RefObject<HTMLDivElement>;
        type: string;
        value: string;
    }[];
    setLines: React.Dispatch<React.SetStateAction<{
        link: React.RefObject<HTMLDivElement>;
        type: string;
        value: string;
    }[]>>;
    handleModal: (options: {
        show: boolean, position: { x: number, y: number }, text: string, ref: React.RefObject<HTMLDivElement>
    }) => void;
}

export const Flow = ({ lines, setLines, handleModal }: IFlow) => {
    const inputsContainerRef = useRef<HTMLDivElement>(null);

    const createNewInput = (id: number) => {
        // Create a new input
        if (lines.length - 1 === id) {
            setLines((lines) => [...lines, { link: createRef<HTMLDivElement>(), type: "div", value: "" }]);
        }

        if (lines.length - 1 > id) {
            lines[id + 1].link.current?.focus();
        }
    }

    const deleteInput = (id: number) => {
        const ref = lines[id];

        // Set the ref input to div type if it was set to other nodes, rather than deleting it
        if (ref.type !== "div") {
            setLines(lines.map(ref => {
                if (ref === lines[id]) {
                    return { ...ref, type: "div", value: "" }
                }
                return ref;
            }));
            return;
        }

        // Preventing deleting the last input
        if (lines.length <= 1) return;

        // Delete the focused input and focus on the previous one
        setLines(lines => lines.filter((_, i) => i !== id));
        lines[id - 1].link.current?.focus();
    }

    const onClickInputContainer = (event: React.MouseEvent<HTMLDivElement>, id: number) => {
        // Focusing on the input when clicking on the container
        event.preventDefault();
        lines[id].link.current?.focus();
    }

    const onClickEditor = (event: React.MouseEvent<HTMLDivElement>) => {
        // Focusing on the last input if user clicks on the area below the inputs
        if (!inputsContainerRef?.current?.contains(event.target as HTMLDivElement)) {
            lines[lines.length - 1].link.current?.focus();
        }
    }

    const sendCommand = (ref: React.ForwardedRef<HTMLDivElement>, command: string) => {
        const target = (ref as RefObject<HTMLDivElement>);
        if (command.startsWith("/")) {
            handleModal({
                ref: target,
                position: { x: target.current?.offsetLeft || 0, y: target?.current?.offsetTop || 0 },
                text: command.substring(1),
                show: true
            });
        } else {
            handleModal({
                ref: target,
                position: { x: 0, y: 0 },
                text: "",
                show: false
            });
        }
    }

    return <div onClick={onClickEditor} style={{ paddingBottom: "500px" }}>
        <div ref={inputsContainerRef}>
            {lines.map((line, id) =>
                <Container key={id} onClick={(event) => onClickInputContainer(event, id)}>
                    <Input
                        ref={line.link}
                        type={line.type}
                        value={line.value}
                        createNewInput={createNewInput.bind(this, id)}
                        deleteInput={deleteInput.bind(this, id)}
                        sendCommand={sendCommand}
                    />
                </Container>
            )}
        </div>
    </div>
}