import { Component, OnInit } from '@angular/core';
import { SpellComponent } from './spell/spell.component';
import { NgForOf } from '@angular/common';
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
    // this.adjustSpellsArray()
  }

  async adjustSpellsArray(){
    if(this.spells.length <= 1){
      return;
    }

    await this.spells.forEach((spell, index) => {
      if(index %2 == 0){
        this.leftSpells.push(spell)
        return;
      }
      this.rightSpells.push(spell)
    });
  }

  async getSpells(){
    let filters: Filter[] = [{name: 'level', value: '6'}, {name: 'school_id', value: 7}];
    this.spells = await this.spellService.getSpells(/* filters */);
  }
}
