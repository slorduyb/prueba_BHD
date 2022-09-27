import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Storage } from '@ionic/storage-angular';
const apiUrl = environment.backendUrl;

@Injectable({
    providedIn: "root",
})
export class StorageService {
    constructor(private http: HttpClient, private storage: Storage) { }

    async saveUserInfo(data: any) {
        await this.storage.set('userInfo', data.userInfo);
        await this.storage.set('token', data.token);
    }

    async getUserInfo() {
        return {
            token: await this.storage.get('token'),
            userInfo: await this.storage.get('userInfo')
        }
    }

     async logout () {
       await this.storage.clear()
       return Promise.resolve(true)
    }

     getUserProducts(token) {
    
       return this.http.get<any>(`${apiUrl}/api/products/`,{headers: {'token':token}})
    }

}