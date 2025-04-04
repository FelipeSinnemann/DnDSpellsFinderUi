import { Component, OnInit } from '@angular/core';
import { SpellComponent } from './spell/spell.component';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { SpellsService } from '../../services/spells/spells.service';
import { Spell } from '../../models/spell/spell';
import { Filter } from '../../models/filter/filter';
import { SpellSidebarComponent } from './spell-sidebar/spell-sidebar.component';
import { FormsModule } from '@angular/forms';
import { CharacterClass } from '../../models/character-class/character-class';
import { CharacterClassesService } from '../../services/character-classes/character-classes.service';
import { SchoolsEnum } from '../../enums/schools';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-spells',
  imports: [NgForOf, NgClass, NgIf, FormsModule, SpellComponent, SpellSidebarComponent, MatProgressBarModule],
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.scss'
})

export class SpellsComponent implements OnInit {
  public spells: Spell[] = [];
  public classes: CharacterClass[] = [];

  public schoolsKey: any[] = [];

  public selectedSpell: Spell | null = null;

  public showMobileFilters: boolean = false;

  schoolsEnum = SchoolsEnum;

  public filters: {
    name: string | null, 
    level: number | null, 
    school_id: number | null, 
    class_id: number | null
  } = 
  {
    name: null,
    level: null,
    school_id: null,
    class_id: null
  }

  public loadingSpells: boolean = true;

  constructor(
    private spellService: SpellsService,
    private characterClassesService: CharacterClassesService
  ) {}
  
  async ngOnInit(){
    await this.getSpells();
    await this.getClasses();
    this.getSchoolsKeys();
  }

  public selectSpell(spell: Spell | null){
    let elementId: string | null = null;

    if(!spell || !this.selectedSpell){
      elementId = 'spell-' + (spell ? spell?.id : this.selectedSpell?.id);
    }

    this.selectedSpell = spell;

    if(!elementId){
      return;
    }

    setTimeout(() => {
      document.getElementById(elementId)?.scrollIntoView();
    }, 1);
  }

  public openCloseMobileFilters(){
    this.showMobileFilters = !this.showMobileFilters;
  }

  async getSpells(){
    this.loadingSpells = true;
    let filters: Filter[] = this.getFilters();
    this.spells = await this.spellService.getSpells(filters);
    this.loadingSpells = false;
  }

  async getClasses(){
    this.classes = await this.characterClassesService.getCharacterClasses();
  }

  private getSchoolsKeys(){
    this.schoolsKey = Object.keys(this.schoolsEnum).filter(k => !isNaN(Number(k)));
  }

  public spellsPlaceholder(n: number): Array<number> {
    return Array(3 - n);
  }

  private getFilters(): Filter[]{
    let filters: Filter[] = [];
    Object.entries(this.filters).forEach((filter) => {
      if(filter[1] === null || filter[1] === "null" || filter[1] === ""){
        return;
      }

      filters.push({name: filter[0], value: filter[1]});
    });

    return filters;
  }
}
