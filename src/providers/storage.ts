import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {

    constructor() {

    }

    set(keyId: string, keyValue: string): void {
        (<any>window).localStorage[keyId] = keyValue;
    }

    get(keyId: string): string {
        return (<any>window).localStorage[keyId];
    }

    setObject(keyId: string, keyValue: any): void {
        (<any>window).localStorage[keyId] = JSON.stringify(keyValue);
    }

    getObject(keyId: string): any {
        return (<any>window).localStorage[keyId] ? JSON.parse((<any>window).localStorage[keyId]) : undefined;
    }

    clearOne(keyId: string): void {
        (<any>window).localStorage[keyId] = '';
    }

    clear(): any {
        (<any>window).localStorage.clear();
    }
}
