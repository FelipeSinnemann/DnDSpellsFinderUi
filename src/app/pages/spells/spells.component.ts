import { Component, OnInit } from '@angular/core';
import { SpellComponent } from './spell/spell.component';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { SpellsService } from '../../services/spells/spells.service';
import { Spell } from '../../models/spell/spell';
import { Filter } from '../../models/filter/filter';
import { SpellSidebarComponent } from './spell-sidebar/spell-sidebar.component';

@Component({
  selector: 'app-spells',
  imports: [NgForOf, NgClass, SpellComponent, SpellSidebarComponent],
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.scss'
})

export class SpellsComponent{
  public spells: Spell[] = [];
  public leftSpells: any[] = []
  public rightSpells: any[] = []

  public selectedSpell: Spell | null = null;

  constructor(private spellService: SpellsService) {}
  
  async ngOnInit(){
    await this.getSpells()
  }

  public selectSpell(spell: Spell | null){
    this.selectedSpell = spell;
  }

  async getSpells(){
    let filters: Filter[] = [{name: 'level', value: 9}];
    this.spells = await this.spellService.getSpells(filters);
  }

  public spellsPlaceholder(n: number): Array<number> {
    return Array(3 - n);
  }
}
