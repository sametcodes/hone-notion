import { useState, createRef } from 'react';
import { FlowModal } from './modal';
import { Flow } from './flow';
import { Header } from './header';

interface IEditor {
    config: {
        nodes: { node: string; description: string }[];
    }
}

export const Editor = ({ config }: IEditor) => {
    const initialRefs = [
        { link: createRef<HTMLDivElement>(), type: "div", value: "Your goal is to make a page that looks like exactly like this one, and has ability to create H1 text simply by typing / then 1, then typing text, and hitting enter." },
        { link: createRef<HTMLDivElement>(), type: "h1", value: "This is my header" },
        { link: createRef<HTMLDivElement>(), type: "div", value: "Now this is normal text. All I had to do is do / + 1, and then type my text and hit ENTER/RETURN" },
    ]
    const [refs, setRefs] = useState<{ link: React.RefObject<HTMLDivElement>; type: string; value: string; }[]>(initialRefs);

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
        setRefs(refs.map(ref => {
            if (ref.link === modal.ref) {
                return { ...ref, type: item.node }
            }
            return ref;
        }));
        setModal({ ...modal, show: false });
    }

    return <>
        <Header title={"Frontend Development"} />
        <Flow refs={refs} setRefs={setRefs} handleModal={handleModal} />
        {modal.show && <FlowModal nodes={config.nodes} modal={modal} onSelect={onSelectModalNodeType} />}
    </>
}
