import React from 'react';
import './App.css';

class DrumMachine extends React.Component{
  constructor(props){
    super(props);
    this.state={
      drumPadBeat:null,
    };
    this.handleDrumClick = this.handleDrumClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount(event){
	document.addEventListener("keypress", this.handleClick);
  }
  
  handleClick(event){
	let key = event.key.toUpperCase();
	if(key === 'Q' || key==='W' || key==='E'
	|| key === 'A' || key==='S' || key==='D'
	|| key === 'Z' || key==='X' || key==='C'){
		let element = document.getElementById('beat'+key);
		element.click();
	}
  }
  
  handleDrumClick(event){
    let beatName = event.target.value;
    let beatId = event.target.id;
    let element = document.getElementById(beatId).querySelector(".clip");
    element.play();
    this.setState({
      drumPadBeat:beatName,
    });
  }
  
  
  render(){
    return(
      <div id='drum-machine'>
        <Display drumPad={this.state.drumPadBeat} />
        <DrumPads handleDrumClick={this.handleDrumClick}/>
      </div>
    );
  }
}

class Display extends React.Component{
  render(){
    return (
      <div>
        <input id='display' value={this.props.drumPad}>
        </input>
      </div>);
  }
}

class DrumPads extends React.Component{  
  render(){
    return (
		<div className="drumPads">
			<DrumPad keyId='Q' beatName='Heater 1' handleDrumClick={this.props.handleDrumClick} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
			<DrumPad keyId='W' beatName='Heater 2' handleDrumClick={this.props.handleDrumClick} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
			<DrumPad keyId='E' beatName='Heater 3' handleDrumClick={this.props.handleDrumClick} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />
			<DrumPad keyId='A' beatName='Heater 4' handleDrumClick={this.props.handleDrumClick} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" />
			<DrumPad keyId='S' beatName='Clap' handleDrumClick={this.props.handleDrumClick} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" />
			<DrumPad keyId='D' beatName='Open HH' handleDrumClick={this.props.handleDrumClick} src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" />
			<DrumPad keyId='Z' beatName={'Kick n\' Hat'} handleDrumClick={this.props.handleDrumClick} src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" />
			<DrumPad keyId='X' beatName='Kick' handleDrumClick={this.props.handleDrumClick} src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" />
			<DrumPad keyId='C' beatName='Closed HH' handleDrumClick={this.props.handleDrumClick} src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" />
		</div>
     );
  }
}

class DrumPad extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
  
  render(){
    return (
        <button className='drum-pad' id={'beat'+this.props.keyId} onClick={this.props.handleDrumClick} value={this.props.beatName}>{this.props.keyId}
         <audio className='clip' src={this.props.src} id={this.props.keyId}/>
        </button>
    );
  }
}

export default DrumMachine;
