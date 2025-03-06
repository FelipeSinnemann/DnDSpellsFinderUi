import { Component, OnInit } from '@angular/core';
import { SpellComponent } from './spell/spell.component';
import { NgForOf, NgIf } from '@angular/common';
import { SpellsService } from '../../services/spells/spells.service';
import { Spell } from '../../models/spell/spell';
import { Filter } from '../../models/filter/filter';

@Component({
  selector: 'app-spells',
  imports: [NgForOf, SpellComponent],
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.scss'
})

export class SpellsComponent{
  public spells: Spell[] = [];
  public leftSpells: any[] = []
  public rightSpells: any[] = []

  constructor(private spellService: SpellsService) {}
  
  async ngOnInit(){
    await this.getSpells()
  }

  async getSpells(){
    let filters: Filter[] = [{name: 'level', value: '6'}, {name: 'school_id', value: 5}];
    this.spells = await this.spellService.getSpells(filters);
  }

  public spellsPlaceholder(n: number): Array<number> {
    return Array(3 - n);
  }
}
