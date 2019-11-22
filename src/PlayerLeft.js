import React from 'react';

import './Player.css';

const PlayerLeft = (props) => {

    console.log(props);

    return(

        <aside className="Left">
            <img className="AlbumImg" src={props.albumCover} 
                alt={props.altText}/>

            <audio onPlay={props.toggleButton} onPause={props.toggleButton} onTimeUpdate={props.progressBar}>
                <source src={props.audioSource} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio> 

            <div className="TrackLength">
                <div className="TrackLengthFilled">

                </div>
            </div>

            <div className="Controls">
                <i className="fas fa-random"></i>
                
                <i className="fas fa-step-backward"></i>
                <i className="fas fa-play" onClick={props.onPlay}></i>
                <i className="inactiveBtn fas fa-pause" onClick={props.onPlay}></i>
                <i className="fas fa-step-forward" onClick={props.nextTrack}></i>
                <i className="fas fa-redo-alt"></i>
            </div>

            <h2>{props.track}</h2>
            <h3>{props.artist}</h3>

        </aside>

    );
}

export default PlayerLeft;