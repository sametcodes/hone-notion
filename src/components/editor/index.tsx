import { useState, createRef } from 'react';
import { FlowModal } from './modal';
import { Flow } from './flow';

interface IEditor {
    config: {
        nodes: { node: string; description: string }[];
    }
}

export const Editor = ({ config }: IEditor) => {
    const [refs, setRefs] = useState<{ link: React.RefObject<HTMLDivElement>; type: string; }[]>(
        new Array(1).fill(0).map(() => ({ link: createRef<HTMLDivElement>(), type: "div" }))
    );

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
        <Flow refs={refs} setRefs={setRefs} handleModal={handleModal} />
        {modal.show && <FlowModal nodes={config.nodes} modal={modal} onSelect={onSelectModalNodeType} />}
    </>
}
