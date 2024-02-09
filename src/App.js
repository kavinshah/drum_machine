import React, {useState} from 'react';
import './App.css';

document.addEventListener("keypress", handleClick);

function handleClick(event){
	let key = event.key.toUpperCase();
	if(key === 'Q' || key==='W' || key==='E'
		|| key === 'A' || key==='S' || key==='D'
		|| key === 'Z' || key==='X' || key==='C'){
		let element = document.getElementById('beat'+key);
		element.click();
	}
}

function DrumMachine(props){
	const [drumPadBeat, setDrumPadBeat] = useState(null);
	
	const handleDrumClick=(event)=>{
		let beatName = event.target.value;
		let beatId = event.target.id;
		let element = document.getElementById(beatId).querySelector(".clip");
		element.play();
		setDrumPadBeat(beatName);
	}
	
	return(
      <div id='drum-machine'>
        <Display drumPad={drumPadBeat} />
        <DrumPads handleDrumClick={handleDrumClick}/>
      </div>
    );
}

function Display({drumPad}){
	return(
      <div>
        <input id='display' value={drumPad}>
        </input>
      </div>
	  );
}

function DrumPads({handleDrumClick}){
	return (
		<div className="drumPads">
			<DrumPad keyId='Q' beatName='Heater 1' handleDrumClick={handleDrumClick} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
			<DrumPad keyId='W' beatName='Heater 2' handleDrumClick={handleDrumClick} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
			<DrumPad keyId='E' beatName='Heater 3' handleDrumClick={handleDrumClick} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" />
			<DrumPad keyId='A' beatName='Heater 4' handleDrumClick={handleDrumClick} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" />
			<DrumPad keyId='S' beatName='Clap' handleDrumClick={handleDrumClick} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" />
			<DrumPad keyId='D' beatName='Open HH' handleDrumClick={handleDrumClick} src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" />
			<DrumPad keyId='Z' beatName={'Kick n\' Hat'} handleDrumClick={handleDrumClick} src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" />
			<DrumPad keyId='X' beatName='Kick' handleDrumClick={handleDrumClick} src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" />
			<DrumPad keyId='C' beatName='Closed HH' handleDrumClick={handleDrumClick} src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" />
		</div>
     );
}

function DrumPad({keyId, handleDrumClick, beatName, src}){
	return (
        <button className='drum-pad' id={'beat'+ keyId} onClick={handleDrumClick} value={beatName}>{keyId}
         <audio className='clip' src={src} id={keyId}/>
        </button>
    );
}

export default DrumMachine;
