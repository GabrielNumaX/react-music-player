import React, {Component} from 'react';
import axios from 'axios';

import PlayerLeft from './PlayerLeft';
import PlayerRight from './PlayerRight';

import './App.css';
import './Player.css'


class App extends Component {

  state = {
        trackList: [],
        currentTrack: {},
        currentId: '',
        objPos: 0,
        playing: false,
        repeat: false,
        random: false,
        randomTrack: {},
        randomId: '',
      }


  componentDidMount() {

    axios.get('http://5dd1894f15bbc2001448d28e.mockapi.io/playlist')
    .then(response => {
      this.setState({
        trackList: response.data, 
        currentTrack: response.data[0],
        currentId: response.data[0].id});
    })
    .catch(error => {
      alert("There's been an ERROR reload page")
    })
  }

  componentDidUpdate() {

    // console.log('componentDidUpdate');
    
    if(this.state.playing) {

      this.audioElement.play();
    }

    //try did to KEEP button active but it's calling twice and deactivating it
    // if(this.state.random){
    //   this.randomTrack(this.state.currentId);
    // }

    //try did to KEEP button active but it's calling twice and deactivating it
    // if(this.state.repeat){
    //   this.repeat(this.state.currentId);
    // }
    
  }

  onPlayClicked = () => {

    const audio = document.querySelector('audio');

    const playState = this.state.playing;

    if(audio.paused) {

      audio.play();

      this.setState({playing: !playState});
   }
   else {
 
     audio.pause();

     this.setState({playing: !playState});
   }
 
    // console.log(audio.autoplay);
    // audio.autoplay = true;
    // console.log(audio.autoplay);
 } // end function onPlay


/* pos is id of current track, 
checks if random-> sets track and id to randomTrack and id
if NO random -> checks if last obj of array->  sets track and id to first track and id
                                               from trackList
                       if NO -> sets track and id to trackList[pos+1]
*/
 onTrackEnded = (pos) => {

  // console.log('onTrackEnded')

  // console.log(this.state.random);

  const audio = document.querySelector('audio');

  // console.log(audio.autoplay);

  if(this.state.random){

    this.setState({
      currentTrack: this.state.randomTrack,
      currentId: this.state.randomId
    });

    audio.src = this.state.currentTrack.file;

  }

  else if(this.state.repeat){

    this.setState({
      currentTrack: this.state.currentTrack,
      currentId: this.state.currrentId
    })

  }


  else{

    if(parseInt(pos) === this.state.trackList.length) {

      this.setState({
        currentTrack: this.state.trackList[0],
        currentId: this.state.trackList[0].id
      });

      audio.src = this.state.currentTrack.file;

    }    
    else {

      // console.log('inside else random FALSE');
      // console.log('pos before '+ pos);
      // console.log(this.state.trackList[pos].track);

      pos = parseInt(pos)

      //I was setting the index of array with id 
      //and it was NOT returning the next Obj so 
      //I'm just commenting next line and using id to set next index 

      // pos++;

      // console.log('pos after '+ pos);
      // console.log(this.state.trackList[pos].track);

      this.setState({
        currentTrack: this.state.trackList[pos],
        currentId: this.state.trackList[pos].id
      });

      // console.log(this.state.currentTrack.file)

      audio.src = this.state.currentTrack.file;
    }
  }

  // if(this.state.repeat){

  //   this.setState({
  //     currentTrack: this.state.currentTrack,
  //     currentId: this.state.currrentId
  //   })

  // }
    // this.audioElement.current.play();
    // console.log(this.audioElement.current);
    // console.log(this.audioElement);
    //autoplay get printed to true but DOES NOT autoplay next song
    // audio.autoplay = true;
    // console.log(audio.autoplay);

    // audio.load();
    // audio.play();
    //this prints a pending Promise
    // console.log(audio.play());

 } //end function onTrackEnded


 //this is passed to audio onPlay onPause but here should be passed to the button instead 
 //or could be set on audio Play Pause to call function TRY!!!
  toggleButton = () => {
    const audio = document.querySelector('audio');

    let playBtn = document.querySelector('.fa-play');
    let pauseBtn = document.querySelector('.fa-pause');

    if(audio.paused){
      // console.log(pauseBtn);
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

    if(parseInt(pos) === this.state.trackList.length){
      pos = 1;
    }
    else {
      pos++;
    }

    const nextTrack = this.state.trackList.filter(item => {
      return item.id === pos.toString();
    })

    pos = parseInt(pos);

    // console.log(nextTrack[0]);
    // console.log(nextTrack[0].id);

    this.setState({
      currentTrack: nextTrack[0],
      currentId: nextTrack[0].id
    })
  }

 prevTrack = (pos) => {

    if(parseInt(pos) === 1){
      pos = this.state.trackList.length;
    }
    else {
      pos--;
    }

    const prevTrack = this.state.trackList.filter(item => {
      return item.id === pos.toString();
    })

    this.setState({
      currentTrack: prevTrack[0],
      currentId: prevTrack[0].id
    })
  }


  //creates random id between given id
  randomSameCheck = (pos) => {

    pos = parseInt(pos)

    //between 7 & 0 for index of randomTrack()
    const random = Math.floor(Math.random() * (this.state.trackList.length - 1 + 0)) + 1;

    // console.log('inside randomSame ' + random)

    if(random === pos){

      // console.log('inside randomSame if ' + random)


      this.randomSameCheck(pos)
    }
    else {

      // console.log('inside randomSame else ' + random)

      pos = random;
    }

    return pos;

  }

  randomTrack(pos) {

    //it cost me a while to realize this IMPORTANT
    pos = this.randomSameCheck(pos)

    // console.log('inside random '+ pos);

    // console.log(pos)

    this.setState( {
        randomTrack: this.state.trackList[pos],
        randomId: this.state.trackList[pos].id
    });

    const randomBtn = document.querySelector('.fa-random');

    if(!this.state.random) {

      //color it's changing and getting printed
      //but NOT changes are applied
      randomBtn.style.color = 'whitesmoke';

      // console.log(randomBtn.style.color);

      this.setState({random: true});
  
    }
    else {

      randomBtn.style.color = 'black';

      this.setState({random: false})
    }

  } //end function random

  repeat = () => {

    const repeatBtn = document.querySelector('.fa-redo-alt');

    if(!this.state.repeat){

      // console.log('repeat if -> false')

      this.setState((prevState) =>{
        return {repeat: !prevState.repeat}
      });

      repeatBtn.style.color = 'whitesmoke';

    }
    else {

      // console.log('repeat if -> true')

      this.setState({repeat: false});

      repeatBtn.style.color = 'black';
    }

  } //end function repeat

  listClick = (pos) => {

    this.setState({
        currentTrack: this.state.trackList[pos],
        currentId: this.state.trackList[pos].id
    })
  }
  
  render() {

    const ListPlayer = this.state.trackList.map((item, pos) => {

      return(

        <PlayerRight key={item.id}
                    onListClick={() => this.listClick(pos)}
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
          this.state.trackList !== undefined || this.state.trackList !== [] || this.state.trackList !== null ?

          <main className="Player">

            <PlayerLeft audioRef={(el) => {this.audioElement = el}}
                        key={this.state.currentTrack.id}
                        id={this.state.currentTrack.id} 
                        albumCover={this.state.currentTrack.albumCover}
                        altText={this.state.currentTrack.track}
                        toggleButton={this.toggleButton}
                        progressBar={this.progressBar}
                        nextTrack={() => this.nextTrack(this.state.currentId)}
                        prevTrack={() => this.prevTrack(this.state.currentId)}
                        randomTrack={() => this.randomTrack(this.state.currentId)}
                        audioSource={this.state.currentTrack.file}
                        onPlay={this.onPlayClicked}
                        onTrackEnd={() => this.onTrackEnded(this.state.currentId)}
                        onRepeat={this.repeat}
                        track={this.state.currentTrack.track}
                        artist={this.state.currentTrack.artist} />
           

            <aside className="Right"> 
              {ListPlayer}
            </aside>
          </main>

          :

          <main className="Player">
            <h1 className="Loading">Playlist Loading...</h1>
          </main>         

          }

      </div>
    );
  }
}

export default App;
