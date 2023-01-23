import { Node } from '../../../config';
import { Modal, ModalList, ModalListItem, ModalListItemName } from '../../styled';

interface IFlowModal {
    modal: {
        show: boolean;
        position: {
            x: number;
            y: number;
        };
        text: string;
    },
    nodes: Node[];
    onSelect: (item: Node) => void;
}

export const FlowModal = (props: IFlowModal) => {
    const { modal, nodes, onSelect } = props;

    const filtered_nodes = nodes
        .filter(node => node.node.startsWith(modal.text))
        .map((node, index) =>
            <ModalListItem onClick={() => onSelect(node)} key={index}>
                <ModalListItemName>{node.node} ― {node.description}</ModalListItemName>
            </ModalListItem>)


    return <Modal position={modal.position}>
        <ModalList>
            {filtered_nodes.length > 0 ? filtered_nodes : <ModalListItem>No results</ModalListItem>}
        </ModalList>
    </Modal>
}