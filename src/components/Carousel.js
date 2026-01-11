import React, { useState } from "react";

import Card from "../components/Card";

// import asdf from '../assets/images/asdf.png';
import goalflix from "../assets/images/goalflix.PNG";
import taskio from "../assets/images/taskio.JPG";
import portfolio from "../assets/images/portfolio.PNG";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Carousel = (props) => {
    const [allItems, setAllItems] = useState([
        {
          id: 0,
          title: "Taskio",
          subTitle:
            "A retro gaming themed task tracker and to do list.\nBuilt with a partner during a hackathon, created an express JS app with authentication and authorisation.",
          imgSrc: taskio,
          link: "https://sleepy-falls-92191.herokuapp.com/home",
          repoLink: "https://github.com/AlexQ6/express_hackathon",
          selected: false,
        },
        {
          id: 1,
          title: "Goalflix",
          subTitle:
            "A place to see all your European football highlights.\nBuilt using vanilla JS, my partner and I utilised multiple APIs to create a entertainment hub.",
          imgSrc: goalflix,
          link: "https://goalflix.netlify.app/",
          repoLink: "https://github.com/AlexQ6/Goalflix",
          selected: false,
        },
        {
          id: 2,
          title: "Portfolio",
          subTitle: "Personal portfolio website built using React JS",
          imgSrc: portfolio,
          link: "https://alexqiang.com",
          repoLink: "https://github.com/AlexQ6/react-portfolio",  
          selected: false,
        },
      ]);

    const handleCardClick = (id, card) => {
        let items = [...allItems];

        items[id].selected = items[id].selected ? false : true;

        items.forEach((item) => {
            if (item.id !== id) {
            item.selected = false;
            }
        });
        setAllItems(
            items,
        );
    };
    
    const makeItems = (items) => {
        return items.map((item) => {
            return (
            <Col md={4} sm={12} key={item.id} className="mb-5 d-flex align-items-stretch">
                <Card
                    item={item}
                    click={(e) => handleCardClick(item.id, e)}
                />
            </Col>
            );
        });
    };
    
      
    return (
        <Container fluid={true}>
          <Row className="justify-content-around broken-grid-row align-items-start">
              {makeItems(allItems)}
          </Row>
        </Container>
    );
      
};


export default Carousel;
