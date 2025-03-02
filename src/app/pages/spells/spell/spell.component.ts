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

  schoolsEnum = SchoolsEnum;
  constructor() {
  }

  showMaterials() {
    this.spell.showMaterials = !this.spell.showMaterials;
  }

  showDescription() {
    this.spell.showDescription = !this.spell.showDescription;
  }
}
