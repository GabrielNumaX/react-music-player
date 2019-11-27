import React from 'react';

import './Player.css';

// You could either do onClick={() => props.headlinesClicked(); props.getData()}, 
//       or extract it to a new function/method that does both calls, 
//       then invoke it with onClick={myNewMethod} or onClick={() => myNewMethod()}.


const PlayerRight = (props) => {

    return(

            <div className="Card" onClick={() => props.onListClick()}>

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