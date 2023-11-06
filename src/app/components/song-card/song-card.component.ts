
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {
  @Input() songTitle!: string;
  audioUrl:string="/assets/beatitmj.mp3"
  ; // Input property to receive song data
  audioElement: HTMLAudioElement; // Reference to the current song's audio element
  isPlaying: boolean = false; // Flag to track playback status
  progress: number = 0; // Track the song progress for the progress bar

constructor() {
    this.audioElement = new Audio(); // Initialize audioElement here
  }

  ngOnInit(): void {
    this.audioElement = new Audio();
    this.audioElement.addEventListener('ended', () => {
      this.isPlaying = false;
      this.progress = 0;
    });
  }

  playSong() {
    if (this.isPlaying) {
      this.audioElement.pause();
      this.isPlaying = false;
    } else {
      if (this.audioElement.src === this.audioUrl) {
        this.audioElement.play();
      } else {
        this.audioElement.src = this.audioUrl;
        this.audioElement.load();
        this.audioElement.play();
      }
      this.isPlaying = true;

      this.audioElement.addEventListener('timeupdate', () => {
        this.progress = (this.audioElement.currentTime / 457) * 100;
      });
    }
  }

  pauseSong() {
    if (this.isPlaying) {
      this.audioElement.pause();
      this.isPlaying = false;
    }
  }
}
