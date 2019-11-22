import React from 'react';

import './Player.css';

const PlayerRight = (props) => {

    return(

            <div className="Card">

                <img src={props.listImage}
                    alt={props.altText}></img>

                <div className="CardTitle">
                    <h4>{props.track}</h4>
                    <h5>{props.artist}</h5>
                </div>
            </div>

    );
}

export default PlayerRight;