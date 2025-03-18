import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Spell } from '../../models/spell/spell';
import { Filter } from '../../models/filter/filter';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {

  constructor(private http: HttpClient) { }

  public async getSpells(filters: Filter[] = []) {
    let params = this.setParams(filters);

    let result: any = await this.http.get(environment.apiUrl + '/spells', {params}).toPromise();
    return result.data as Spell[];
  }

  private setParams(filters: Filter[]) {
    let params: any = {};
    filters.forEach(filter => {
      params[filter.name] = filter.value;
    });
    return params;
  } 
}
