import { Component, Input, OnInit } from '@angular/core';
import { SchoolsEnum } from '../../../enums/schools';
import { NgClass, NgIf } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Spell } from '../../../models/spell/spell';

@Component({
  selector: 'app-spell',
  imports: [NgIf, NgClass],
  templateUrl: './spell.component.html',
  styleUrl: './spell.component.scss'
})
export class SpellComponent implements OnInit{
  @Input() spell: Spell;
  @Input() selected: boolean = false;

  public sanitizedDescription: SafeHtml;

  schoolsEnum = SchoolsEnum;
  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.sanitizeDescription();
  }

  sanitizeDescription() {
    if(!this.spell){
      return;
    }

    this.sanitizedDescription = this.sanitizer.bypassSecurityTrustHtml(this.spell?.description);
  }
}
