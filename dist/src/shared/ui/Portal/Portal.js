import { createPortal } from 'react-dom';
export var Portal = function (props) {
    var _a;
    var children = props.children, domNode = props.domNode;
    var root = (_a = domNode !== null && domNode !== void 0 ? domNode : document.getElementById('app')) !== null && _a !== void 0 ? _a : document.body;
    return (createPortal(children, root));
};
