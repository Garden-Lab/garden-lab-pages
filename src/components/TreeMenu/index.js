import React from "react";
import "./index.css";
import {useNavigate} from "react-router-dom";

const TreeMenu = ({nodes = []}) => {
    let _navigator = useNavigate();

    const treeArrowClick = (e) => {
        let _parent = e.target.parentNode;
        let _nextLevel = Number(_parent.id) + 1;
        let _isDown = e.target.className.indexOf("down") === -1;
        let _nextNode = _parent.children.namedItem(String(_nextLevel));
        if (_nextNode !== undefined){}
            _nextNode.hidden = _isDown;
        e.target.className = "tree-status-arrow " + (_isDown ? "down" : "up");
    };

    const treeLabelClick = (e) => {
        _navigator(e.target.ariaLabel);
    };

    const drawNodes = (nodes) => {
        if (nodes !== undefined) {
            return nodes.map(node => {
                return drawTreeMenu(node, true);
            })
        }
    }

    const getPaddingPx = (level) => {
        return (level * 10) + 'px'
    };

    const drawTreeMenu = (node, hidden = false) => {
        return (
            <div hidden={hidden}
                 key={node.artifact}
                 id={node.level}
                 style={{paddingLeft: getPaddingPx(node.level)}}>
                <span className="tree-label"
                      aria-label={node.url}
                      onClick={treeLabelClick}>{node.label}</span>
                <span
                    hidden={node.nodes === undefined}
                    className="tree-status-arrow down"
                    onClick={treeArrowClick}/>
                {drawNodes(node.nodes)}
            </div>
        )
    };

    return (
        <div id="tree-main" className="tree-menu">
            {
                nodes.map(node => drawTreeMenu(node))
            }
        </div>
    )
};

export default TreeMenu;
