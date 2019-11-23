import React, {Component} from 'react';
import axios from 'axios';

import PlayerLeft from './PlayerLeft';
import PlayerRight from './PlayerRight';

import './App.css';
import './Player.css'


class App extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     trackList: [],
  //     objPos: 0
  //   }

  // }

  state = {
        trackList: [],
        currentTrack: {},
        currentId: '0'
      }


  componentDidMount() {

    axios.get('http://5dd1894f15bbc2001448d28e.mockapi.io/playlist')
    .then(response => {
      console.log('response.data');
      console.log(response.data);
      // console.log(response);
      this.setState({trackList: response.data});
      this.setState({currentTrack: response.data[0]});  
      this.setState({currentId: response.data[0].id});

      // for(let i = 0; i < response.data.length; i++){

      //   console.log(response.data[i]);

      //   // if(i === 0){
      //   //   this.setState({
      //   //     currentTrack: response.data[i],
      //   //     currentId: response.data[i].id});
      //   // }
      //   // break;
      // }
    })
    .catch(error => {
      alert("There's been an ERROR reload page")
    })
  }

  onPlayClicked = () => {

    const audio = document.querySelector('audio');

    if(audio.paused) {
      audio.play();
   }
   else {
 
     audio.pause();
   }
 }

 //this is passed to audio onPlay onPause but here should be passed to the button instead 
 //or could be set on audio Play Pause to call function TRY!!!

  toggleButton = () => {
    const audio = document.querySelector('audio');

    let playBtn = document.querySelector('.fa-play');
    let pauseBtn = document.querySelector('.fa-pause');

    if(audio.paused){
      console.log(pauseBtn);
      pauseBtn.classList.add('inactiveBtn');
      playBtn.classList.remove('inactiveBtn');
    }
    else {
      // console.log(pauseBtn);
      // console.log(playBtn);
      pauseBtn.classList.remove('inactiveBtn');
      playBtn.classList.add('inactiveBtn');

    }
  }

  progressBar = () => {

    const audio = document.querySelector('audio');
    const progressBar = document.querySelector('.TrackLengthFilled');
    const percent = (audio.currentTime / audio.duration) * 100;

    progressBar.style.flexBasis = `${percent}%`;
  }

  nextTrack = (pos) => {

    alert(pos);
  }
  

  render() {

    // const response = this.state.trackList;

    // console.log('response ', response);

    // const MainPlayer = this.state.trackList.map((item, pos) => {

    //   if (pos === 0) {

    //     return(
    //       <PlayerLeft key={pos}
    //                   id={item.id} 
    //                   albumCover={item.albumCover}
    //                   altText={item.track}
    //                   toggleButton={this.toggleButton}
    //                   progressBar={this.progressBar}
    //                   nextTrack={() => this.nextTrack(pos)}
    //                   audioSource={item.file}
    //                   onPlay={this.onPlayClicked}
    //                   track={item.track}
    //                   artist={item.artist} />
    //     );
    //    }
    // })

    console.log(this.state.trackList);
    console.log(this.currentTrack);
    console.log(this.currentId);
    

    //this works but it does not reflects in the return inside render()
    //console.log(this.state.objPos);
    //console.log(this.state.trackList[this.state.objPos]);

    const ListPlayer = this.state.trackList.map((item, pos) => {

      return(

        <PlayerRight key={item.id}
                    position={pos}
                    listImage={item.albumCover}
                    altText={item.track}
                    track={item.track}
                    artist={item.artist} />

      );

    })


    return (
      <div className="App">

          {
          this.state.trackList !== undefined && this.state.trackList !== [] && this.state.trackList !== null ?

          <main>
            {/* <PlayerLeft albumCover={this.state.currentTrack.albumCover} /> */}

            <aside className="Right"> 
              {ListPlayer}
            </aside>
          </main>

          :

          <main className="Player">
            <h1>Playlist Loading...</h1>
          </main>
          
          
            // <PlayerLeft albumCover={this.state.trackList[this.state.objPos].albumCover} />
            // {/* <PlayerLeft key={this.state.objPos}
            //           id={this.state.trackList.id} 
            //           albumCover={this.state.trackList.albumCover}
            //           altText={this.state.trackList.track}
            //           toggleButton={this.toggleButton}
            //           progressBar={this.progressBar}
            //           nextTrack={() => this.nextTrack(this.state.objPos)}
            //           audioSource={this.state.trackList.file}
            //           onPlay={this.onPlayClicked}
            //           track={this.state.trackList.track}
            //           artist={this.state.trackList.artist} /> */}
            

          }

      </div>
    );
  }
}

export default App;
