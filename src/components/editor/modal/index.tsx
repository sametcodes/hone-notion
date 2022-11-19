import { List, ListItem, Modal } from '../../styled';

interface IFlowModal {
    modal: {
        show: boolean;
        position: {
            x: number;
            y: number;
        };
        text: string;
    },
    nodes: { node: string; description: string }[];
    onSelect: (item: { node: string; description: string }) => void;
}

export const FlowModal = (props: IFlowModal) => {
    const { modal, nodes, onSelect } = props;

    const filtered_nodes = nodes
        .filter(node => node.node.startsWith(modal.text))
        .map((node, index) =>
            <ListItem onClick={() => onSelect(node)} key={index}>{node.node} ― {node.description}</ListItem>)
    return <Modal position={modal.position}>
        <List>
            {filtered_nodes.length > 0 ? filtered_nodes : <ListItem>No results</ListItem>}
        </List>
    </Modal>
}