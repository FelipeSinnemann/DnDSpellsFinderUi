import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(){}

  openDevLinks(url: string){
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
      newWindow.focus();
    }
  }
}
