(this["webpackJsonpreact-music-player"]=this["webpackJsonpreact-music-player"]||[]).push([[0],{27:function(t,e,a){t.exports=a(56)},32:function(t,e,a){},4:function(t,e,a){},50:function(t,e,a){},56:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),c=a(17),s=a.n(c),i=(a(32),a(18)),o=a(19),l=a(25),u=a(20),d=a(26),m=a(21),k=a.n(m),p=a(24),f=(a(4),function(t){return n.a.createElement("aside",{className:"Left"},n.a.createElement("img",{className:"AlbumImg",src:t.albumCover,alt:t.altText}),n.a.createElement("audio",{ref:t.audioRef,onPlay:t.toggleButton,onPause:t.toggleButton,onTimeUpdate:t.progressBar,onEnded:t.onTrackEnd,src:t.audioSource,type:"audio/mpeg",autoPlay:!1},"Your browser does not support the audio element."),n.a.createElement("div",{className:"TrackLength"},n.a.createElement("div",{className:"TrackLengthFilled"})),n.a.createElement("div",{className:"Controls"},n.a.createElement("i",{className:"fas fa-random",onClick:t.randomTrack}),n.a.createElement("i",{className:"fas fa-step-backward",onClick:t.prevTrack}),n.a.createElement("i",{className:"fas fa-play",onClick:t.onPlay}),n.a.createElement("i",{className:"inactiveBtn fas fa-pause",onClick:t.onPlay}),n.a.createElement("i",{className:"fas fa-step-forward",onClick:t.nextTrack}),n.a.createElement("i",{className:"fas fa-redo-alt",onClick:t.onRepeat})),n.a.createElement("h2",null,t.track),n.a.createElement("h3",null,t.artist))}),h=function(t){return n.a.createElement("div",{className:"Card"},n.a.createElement("img",{src:t.listImage,alt:t.altText}),n.a.createElement("div",{className:"CardTitle",onClick:t.onListClick},n.a.createElement("h4",null,t.track),n.a.createElement("h5",null,t.artist)))},T=(a(50),function(t){function e(){var t,a;Object(i.a)(this,e);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(n)))).state={trackList:[],currentTrack:{},currentId:"",objPos:0,playing:!1,repeat:!1,random:!1,randomTrack:{},randomId:""},a.onPlayClicked=function(){var t=document.querySelector("audio"),e=a.state.playing;t.paused?(t.play(),a.setState({playing:!e})):(t.pause(),a.setState({playing:!e}))},a.onTrackEnded=function(t){var e=document.querySelector("audio");a.state.random?(a.setState({currentTrack:a.state.randomTrack,currentId:a.state.randomId}),e.src=a.state.currentTrack.file):a.state.repeat?a.setState({currentTrack:a.state.currentTrack,currentId:a.state.currrentId}):parseInt(t)===a.state.trackList.length?(a.setState({currentTrack:a.state.trackList[0],currentId:a.state.trackList[0].id}),e.src=a.state.currentTrack.file):(t=parseInt(t),a.setState({currentTrack:a.state.trackList[t],currentId:a.state.trackList[t].id}),e.src=a.state.currentTrack.file)},a.toggleButton=function(){var t=document.querySelector("audio"),e=document.querySelector(".fa-play"),a=document.querySelector(".fa-pause");t.paused?(a.classList.add("inactiveBtn"),e.classList.remove("inactiveBtn")):(a.classList.remove("inactiveBtn"),e.classList.add("inactiveBtn"))},a.progressBar=function(){var t=document.querySelector("audio"),e=document.querySelector(".TrackLengthFilled"),a=t.currentTime/t.duration*100;e.style.flexBasis="".concat(a,"%")},a.nextTrack=function(t){parseInt(t)===a.state.trackList.length?t=1:t++;var e=a.state.trackList.filter((function(e){return e.id===t.toString()}));t=parseInt(t),a.setState({currentTrack:e[0],currentId:e[0].id})},a.prevTrack=function(t){1===parseInt(t)?t=a.state.trackList.length:t--;var e=a.state.trackList.filter((function(e){return e.id===t.toString()}));a.setState({currentTrack:e[0],currentId:e[0].id})},a.randomSameCheck=function(t){t=parseInt(t);var e=Math.floor(Math.random()*(a.state.trackList.length-1+0))+1;return e===t?a.randomSameCheck(t):t=e,t},a.repeat=function(){var t=document.querySelector(".fa-redo-alt");a.state.repeat?(a.setState({repeat:!1}),t.style.color="black"):(a.setState((function(t){return{repeat:!t.repeat}})),t.style.color="whitesmoke")},a.listClick=function(t){a.setState({currentTrack:a.state.trackList[t],currentId:a.state.trackList[t].id})},a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this;k.a.get("http://5dd1894f15bbc2001448d28e.mockapi.io/playlist").then((function(e){t.setState({trackList:e.data,currentTrack:e.data[0],currentId:e.data[0].id})})).catch((function(t){alert("There's been an ERROR reload page")}))}},{key:"componentDidUpdate",value:function(){this.state.playing&&this.audioElement.play()}},{key:"randomTrack",value:function(t){t=this.randomSameCheck(t),this.setState({randomTrack:this.state.trackList[t],randomId:this.state.trackList[t].id});var e=document.querySelector(".fa-random");this.state.random?(e.style.color="black",this.setState({random:!1})):(e.style.color="whitesmoke",this.setState({random:!0}))}},{key:"render",value:function(){var t=this,e=this.state.trackList.map((function(e,a){return n.a.createElement(h,{key:e.id,onListClick:function(){return t.listClick(a)},position:a,listImage:e.albumCover,altText:e.track,track:e.track,artist:e.artist})}));return n.a.createElement(p.a,{basename:"/"},n.a.createElement("div",{className:"App"},void 0!==this.state.trackList||this.state.trackList!==[]||null!==this.state.trackList?n.a.createElement("main",{className:"Player"},n.a.createElement(f,{audioRef:function(e){t.audioElement=e},key:this.state.currentTrack.id,id:this.state.currentTrack.id,albumCover:this.state.currentTrack.albumCover,altText:this.state.currentTrack.track,toggleButton:this.toggleButton,progressBar:this.progressBar,nextTrack:function(){return t.nextTrack(t.state.currentId)},prevTrack:function(){return t.prevTrack(t.state.currentId)},randomTrack:function(){return t.randomTrack(t.state.currentId)},audioSource:this.state.currentTrack.file,onPlay:this.onPlayClicked,onTrackEnd:function(){return t.onTrackEnded(t.state.currentId)},onRepeat:this.repeat,track:this.state.currentTrack.track,artist:this.state.currentTrack.artist}),n.a.createElement("aside",{className:"Right"},e)):n.a.createElement("main",{className:"Player"},n.a.createElement("h1",{className:"Loading"},"Playlist Loading..."))))}}]),e}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.3509a0f6.chunk.js.map