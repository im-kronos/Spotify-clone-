
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {

  //playSong!: (showName: string) => void;

  @Input()
  songTitle!: string;

  constructor() {}

  ngOnInit(): void {
    this.playSong = this.playSong;

  }
  

 playSong(songName: string) {
  const audioElement = new Audio('/assets/beatitmj.mp3');
    audioElement.pause();
  // Play the new song.
  audioElement.play();
}

}

/*
// Define the Audio type
type Audio = HTMLAudioElement;

// Declare a variable of type Audio
const audioElement: Audio = new Audio('/assets/beatitmj.mp3');

let currentAudioElement: Audio | null = null;

function playSong(audioElement: Audio) {
  // If there is a current audio element, stop it
  if (currentAudioElement !== null) {
    currentAudioElement.pause();
  }

  // Store the new Audio object as the current audio element
  currentAudioElement = audioElement;

  // Play the song
  audioElement.play();
}
*/


/*
type Audio = HTMLAudioElement;

// Declare a variable of type Audio
const audioElement: Audio = new Audio();

// Create a global variable to store the current audio element
let currentAudioElement: Audio | null = null;

// Define the playSong() function
function playSong(showName: string) {
  // If there is a current audio element, stop it
  if (currentAudioElement !== null) {
    currentAudioElement.pause();
  }

  // Create a new Audio object with the path to the show
  const audioElement = new Audio('/assets/beatitmj.mp3');

  // Store the new Audio object as the current audio element
  currentAudioElement = audioElement;

  // Play the show
  audioElement.play();
}

*/