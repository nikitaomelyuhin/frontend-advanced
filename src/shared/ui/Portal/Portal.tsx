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

    const root = domNode ?? document.querySelector('.app');

    return (
        createPortal(
            children,
            root,
        )
    );
};
