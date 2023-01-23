import { useState, createRef, useMemo } from 'react';
import { FlowModal } from './modal';
import { Flow } from './flow';
import { Header } from './header';
import { BGColors, Colors, TextStylings } from '../../config';

interface IEditor {
    config: {
        nodes: { node: string; description: string }[];
    }
}
interface Line {
    link: React.RefObject<HTMLDivElement>;
    type: string;
    value: string;
    color?: Colors;
    bgColor?: BGColors;
    textStyling?: TextStylings; 
}

const defaultValues = [
    {
        link: createRef<HTMLDivElement>(),
        type: "div",
        value: "This is a notion-like editor. You can type / and select an element and use it."
    },
    {
        link: createRef<HTMLDivElement>(),
        type: "h1",
        value: "This is an header"
    },
    {
        link: createRef<HTMLDivElement>(),
        type: "div",
        value: "Lorem ipsum dolor sit amet."
    },
]

export const Editor = ({ config }: IEditor) => {
    const initialLines = useMemo<Line[]>(() => defaultValues, []);

    const [lines, setLines] = useState<{
        link: React.RefObject<HTMLDivElement>;
        type: string;
        value: string;
    }[]>(initialLines);

    const [modal, setModal] = useState<{
        show: boolean;
        position: { x: number; y: number; };
        text: string;
        ref: React.RefObject<HTMLDivElement> | null;
    }>({ show: false, position: { x: 0, y: 0 }, text: "", ref: null });

    const handleModal = (options: {
        show: boolean;
        position: { x: number; y: number };
        text: string;
        ref: React.RefObject<HTMLDivElement>;
    }) => {
        setModal(options);
    }

    const onSelectModalNodeType = (item: { node: string; description: string; }) => {
        setLines(lines.map(line => {
            if (line.link === modal.ref) {
                return { ...line, type: item.node, value: "" }
            }
            return line;
        }));
        setModal({ ...modal, show: false });
    }

    return <>
        <Header title={"Frontend Development"} />
        <Flow lines={lines} setLines={setLines} handleModal={handleModal} />
        {modal.show && <FlowModal nodes={config.nodes} modal={modal} onSelect={onSelectModalNodeType} />}
    </>
}
