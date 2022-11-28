import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;
  private _localCharacter: any[] = [];

  constructor(private storage: Storage) { this.init(); }

  get getLocalCharacter(){
    return [ ...this._localCharacter ];
  }

  async init(){
    const storage = await this.storage.create();
    this._storage = storage;

    this.loadFavorites();
  }

  async saveRemoveCharacter(character: any){

    const exists = this._localCharacter.find(item => item.id === character.id);

    if(exists){
      this._localCharacter = this._localCharacter.filter(item => item.id !== character.id);
    }else{
      this._localCharacter = [character, ...this._localCharacter];
    }

    this._storage.set('characters', this._localCharacter);
  }

  async loadFavorites(){
    try{

      const character = await this._storage.get('characters');
      this._localCharacter = character || [];

    }catch(error){
      this._localCharacter = [];
    }
  }

  characterInFavorite(character: any){
    return !!this._localCharacter.find(item => item.id === character.id);
  }
}
