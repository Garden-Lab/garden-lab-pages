import React, {useEffect} from "react";
import './index.css';

const PageHeading = ({heading, subHeading}) => {
    const updateHeadingDivWidth = () => {
        let subHeading = document.querySelector(".page-sub-heading");
        document.getElementById("heading-div")
            .style.maxWidth = (subHeading.offsetWidth - 10) + "px";
    };
    useEffect(() => {
        updateHeadingDivWidth();
    }, [subHeading]);

    return (
        <div className="heading">
            <p className="page-heading">
                {heading}
            </p>
            <hr id="heading-div"/>
            <span className="page-sub-heading">
                {subHeading}
            </span>
        </div>
    );
}

export default PageHeading;
