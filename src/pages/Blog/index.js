import React from "react";
import PageHeading from "../../components/PageHeading";
import TreeMenu from "../../components/TreeMenu";
import TreeMaker from "../../components/TreeMenu/TreeMaker";
const treeData = [
    {
        "label": "First_Second_Third Menu",
        "artifact": "first.second.third",
        "url": "first/second/third"
    }, {
        "label": "First Menu",
        "artifact": "first",
        "url": "first"
    }, {
        "label": "First_Second Menu",
        "artifact": "first.second",
        "url": "first/second"
    }, {
        "label": "Second Menu",
        "artifact": "second",
        "url": "second"
    }, {
        "label": "third Menu",
        "artifact": "third",
        "url": "third"
    }
];

const Blog = () => {
    const createData = () =>{
        console.log();
        return new TreeMaker(treeData).make()
    }

    return (
        <>
            <PageHeading heading="Blog Page" subHeading="블로그 페이지 제작중.."/>
            <TreeMenu nodes={createData()}/>
        </>
    )
};

export default Blog;
