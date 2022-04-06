class TreeMaker {
    #tree = [];
    #treeData = undefined;

    constructor(treeData) {
        this.#tree = [];
        this.#treeData = treeData;
        this.#sortTreeData();
    }

    #sortTreeData = (targetTreeArray = this.#treeData) => {
        targetTreeArray.sort((a, b) => {
            let aSplitLen = this.#itemArtifactSplitSize(a);
            let bSplitLen = this.#itemArtifactSplitSize(b);
            return aSplitLen - bSplitLen;
        });
    };

    #itemArtifactSplitSize = (item, sep = ".") => {
        return this.#itemArtifactSplit(item, sep).length;
    }

    #itemArtifactSplit = (item, sep = ".") => {
        let splitStrArr = item.artifact.split(sep);
        let size = splitStrArr.length;
        if (item.level === 0 || item.level === undefined) return splitStrArr;
        return item.artifact.replace(sep + splitStrArr[size - 1], "");
    };

    #setLevel = (item) => {
        item.level = item.artifact.split(".").length - 1;
    };

    #findTopNode = (targetArtifact, parentTree = this.#tree) => {
        let targetNode = undefined;
        parentTree.forEach(item => {
            if (item.artifact === targetArtifact)
                targetNode = item;
            else if (item.nodes !== undefined) {
                // console.log('item.nodes' + JSON.stringify(item.nodes));
                targetNode = this.#findTopNode(targetArtifact, item.nodes);
            }
        });
        return targetNode;
    };

    #createTree = item => {
        if (item.level !== 0) {
            let firstArtifact = this.#itemArtifactSplit(item);
            let topTree = this.#findTopNode(firstArtifact);
            if (topTree.nodes !== undefined)
                topTree.nodes.push(item);
            else
                topTree.nodes = new Array(item);
        } else
            return item;
    };

    make = () => {
        this.#treeData.forEach((item) => {
            this.#setLevel(item);
            let treeNode = this.#createTree(item);
            if (treeNode)
                this.#tree.push(treeNode);
        });
        return this.#tree;
    };
}

export default TreeMaker;
