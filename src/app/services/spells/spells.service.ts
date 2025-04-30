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

  public async getSpells(filters: Filter[] = [], page: number = 1, pageSize: number = 15): Promise<Spell[] | boolean> {
    let params = this.setParams(filters, page, pageSize);

    let result: any = await this.http.get(environment.apiUrl + '/spells', {params}).toPromise();

    if(result.next_page_url === null){
      return false;
    }
    return result.data as Spell[];
  }

  private setParams(filters: Filter[], page: number, pageSize: number): any {
    let params: any = {};
    filters.forEach(filter => {
      params[filter.name] = filter.value;
    });

    params.page = page;
    params.pageSize = pageSize;
    return params;
  } 
}
