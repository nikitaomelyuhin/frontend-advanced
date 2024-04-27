import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    domNode?: Element;
    children: ReactNode;
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        domNode,
    } = props;

    const root = domNode ?? document.getElementById('app') ?? document.body;

    return (
        createPortal(
            children,
            root,
        )
    );
};
