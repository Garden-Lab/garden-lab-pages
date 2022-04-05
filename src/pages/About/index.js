import React from "react";
import Timeline from "../../components/Timeline";
import PageHeading from "../../components/PageHeading";


const About = () => {
    return (
        <div className="body-about page">
            <PageHeading heading="About Page" subHeading="About page Sub Title"/>
            <div>
                <Timeline/>
            </div>
        </div>
    )
};

export default About;
