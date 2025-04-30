import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Spell } from '../../../models/spell/spell';
import { NgClass, NgIf } from '@angular/common';
import { SchoolsEnum } from '../../../enums/schools';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-spell-sidebar',
  imports: [NgIf, NgClass],
  templateUrl: './spell-sidebar.component.html',
  styleUrl: './spell-sidebar.component.scss'
})
export class SpellSidebarComponent implements OnInit {
  public spell: Spell | null;
  @Input() set selectedSpell(spell: Spell | null){
    this.spell = spell;
    this.sanitizeDescription()
  }
  @Output() closedSidebar: EventEmitter<any> = new EventEmitter();
  @Input() limitedSidebarWidth: boolean = true;

  schoolsEnum = SchoolsEnum;
  
  public sanitizedDescription: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.sanitizeDescription()
  }

  sanitizeDescription() {
    if(!this.spell){
      return;
    }

    this.sanitizedDescription = this.sanitizer.bypassSecurityTrustHtml(this.spell?.description);
  }

  public closeSidebar(){
    this.spell = null;
    this.closedSidebar.emit();
  }
}
