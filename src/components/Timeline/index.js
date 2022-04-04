import React from "react";
import 'react-vertical-timeline-component/style.min.css';
import {VerticalTimeline} from 'react-vertical-timeline-component';
import TimelineElement from "./timelineElement";

const Timeline = () => {
    return (
        <VerticalTimeline>
            <TimelineElement
                title="Title"
                subTitle="SubTitle"
                content="content"
                date="2022 - "
            />
            <TimelineElement
                title="Title"
                subTitle="SubTitle"
                content="content"
                date="2022 - "
            />
        </VerticalTimeline>
    )
};

export default Timeline;
