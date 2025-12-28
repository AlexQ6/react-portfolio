import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Alex. I'm a full stack engineer with experience in MongoDB, PostgreSQL, React, Node JS, Ruby on Rails.</p>

            <p>I also have experience in building microservice APIs using Java.</p>

            <p>Want to get in touch? Message me on <a href="https://www.linkedin.com/in/alex-qiang/">Linkedin</a>.</p>
            </Content>
        </div>
    );

}

export default AboutPage;