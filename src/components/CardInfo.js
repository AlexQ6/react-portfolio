import React, { useRef } from 'react';

function CardInfo(props) {

    const cardRef = useRef(null);

    return(
        <div className="g-card-info" ref={cardRef}>
            <p className="g-card-title">{props.title}</p>
            <p className="g-card-sub-title">{props.subTitle}</p>
            <div className="mt-auto pt-3">
                <a href={props.link} target="_blank" rel="noopener noreferrer" className="mr-3 text-accent font-weight-bold">VIEW PROJECT</a>
                <a href={props.repoLink} target="_blank" rel="noopener noreferrer" className="text-secondary">SOURCE</a>
            </div>
        </div>
    );

}

export default CardInfo;