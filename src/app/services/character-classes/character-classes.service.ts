import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterClass } from '../../models/character-class/character-class';

@Injectable({
  providedIn: 'root'
})
export class CharacterClassesService {

  constructor(private http: HttpClient) { }

  public async getCharacterClasses() {
    let result: any = await this.http.get('http://localhost:8080/api/classes').toPromise();
    return result.data as CharacterClass[];
  }
}
