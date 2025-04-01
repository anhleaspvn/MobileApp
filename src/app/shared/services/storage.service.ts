import { Injectable } from '@angular/core';

//import { Storage } from '@ionic/storage';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  set(key: string, data: any) {
    
    this.storage?.set(key, data);
  }

  get(key: string) {
    //const res = 
    return this.storage?.get(key);
  }

  remove(key: string) {
    this.storage?.remove(key);
  }

  clear() {
    this.storage?.clear();
  }

}
