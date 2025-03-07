import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Spell } from '../../../models/spell/spell';
import { NgIf } from '@angular/common';
import { SchoolsEnum } from '../../../enums/schools';

@Component({
  selector: 'app-spell-sidebar',
  imports: [NgIf],
  templateUrl: './spell-sidebar.component.html',
  styleUrl: './spell-sidebar.component.scss'
})
export class SpellSidebarComponent {
  @Input() spell: Spell | null = null;
  @Output() closedSidebar: EventEmitter<any> = new EventEmitter();

  schoolsEnum = SchoolsEnum;
  
  constructor() {
  }

  public closeSidebar(){
    this.spell = null;
    this.closedSidebar.emit();
  }
}
