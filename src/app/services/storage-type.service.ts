import { Injectable } from '@angular/core';

export type StorageType = 'api' | 'localstorage';

@Injectable({
  providedIn: 'root',
})
export class StorageTypeService {
  private readonly STORAGE_KEY = 'noteStorageType';

  getStorageType(): StorageType {
    return (localStorage.getItem(this.STORAGE_KEY) as StorageType) || 'api';
  }

  setStorageType(type: StorageType): void {
    localStorage.setItem(this.STORAGE_KEY, type);
    window.location.reload();
  }
}
