import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterClass } from '../../models/character-class/character-class';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterClassesService {

  constructor(private http: HttpClient) { }

  public async getCharacterClasses() {
    let result: any = await this.http.get(environment.apiUrl + '/classes').toPromise();
    return result.data as CharacterClass[];
  }
}
