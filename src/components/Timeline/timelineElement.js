import React from "react";
import {VerticalTimelineElement} from "react-vertical-timeline-component";


const TimelineElement = ({title, subTitle, content, date}) => {
    const makeIconColor = () => "#" + Math.round(Math.random() * 0xFFFFFF).toString(16);

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={date}
            iconStyle={{background: `${makeIconColor()}`, color: '#fff'}}
        >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{subTitle}</h4>
            <p>
                {content}
            </p>
        </VerticalTimelineElement>
    );
};

export default TimelineElement;
