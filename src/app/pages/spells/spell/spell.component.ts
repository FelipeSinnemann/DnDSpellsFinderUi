import { Component, Input } from '@angular/core';
import { SchoolsEnum } from '../../../enums/schools';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-spell',
  imports: [NgIf, NgClass],
  templateUrl: './spell.component.html',
  styleUrl: './spell.component.scss'
})
export class SpellComponent {
  @Input() spell: any;
  @Input() selected: boolean = false;

  schoolsEnum = SchoolsEnum;
  constructor() {
  }
}
