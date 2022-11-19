import { useRef, createRef, RefObject } from 'react';
import { Container } from '../../styled'
import { Input } from '../input';

interface IFlow {
    children?: React.ReactNode;
    refs: {
        link: React.RefObject<HTMLDivElement>;
        type: string;
        value: string;
    }[];
    setRefs: React.Dispatch<React.SetStateAction<{
        link: React.RefObject<HTMLDivElement>;
        type: string;
        value: string;
    }[]>>;
    handleModal: (options: {
        show: boolean, position: { x: number, y: number }, text: string, ref: React.RefObject<HTMLDivElement>
    }) => void;
}

export const Flow = ({ refs, setRefs, handleModal }: IFlow) => {
    const inputsContainerRef = useRef<HTMLDivElement>(null);

    const createNewInput = (id: number) => {
        // Create a new input
        if (refs.length - 1 === id) {
            setRefs((refs) => [...refs, { link: createRef<HTMLDivElement>(), type: "div", value: "" }]);
        }

        if (refs.length - 1 > id) {
            refs[id + 1].link.current?.focus();
        }
    }

    const deleteInput = (id: number) => {
        const ref = refs[id];

        // Set the ref input to div type if it was set to other nodes, rather than deleting it
        if (ref.type !== "div") {
            setRefs(refs.map(ref => {
                if (ref === refs[id]) {
                    return { ...ref, type: "div", value: "" }
                }
                return ref;
            }));
            return;
        }

        // Preventing deleting the last input
        if (refs.length <= 1) return;

        // Delete the focused input and focus on the previous one
        setRefs(refs => refs.filter((_, i) => i !== id));
        refs[id - 1].link.current?.focus();
    }

    const onClickInputContainer = (event: React.MouseEvent<HTMLDivElement>, id: number) => {
        // Focusing on the input when clicking on the container
        event.preventDefault();
        refs[id].link.current?.focus();
    }

    const onClickEditor = (event: React.MouseEvent<HTMLDivElement>) => {
        // Focusing on the last input if user clicks on the area below the inputs
        if (!inputsContainerRef?.current?.contains(event.target as HTMLDivElement)) {
            refs[refs.length - 1].link.current?.focus();
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
            {refs.map((ref, id) =>
                <Container key={id} onClick={(event) => onClickInputContainer(event, id)}>
                    <Input
                        ref={ref.link}
                        type={ref.type}
                        value={ref.value}
                        createNewInput={createNewInput.bind(this, id)}
                        deleteInput={deleteInput.bind(this, id)}
                        sendCommand={sendCommand}
                    />
                </Container>
            )}
        </div>
    </div>
}