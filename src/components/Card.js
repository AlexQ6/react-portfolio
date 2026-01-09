import React from 'react';


import CardInfo from '../components/CardInfo';


function Card(props) {
    

    return(
        <div className="g-card">
            <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} repoLink={props.item.repoLink}/>
        </div>
    );

}

export default Card;