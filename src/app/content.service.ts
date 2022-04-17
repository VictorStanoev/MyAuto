import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost, ITheme, IAd } from './shared/interfaces';

import { environment } from '../environments/environment';
const API_URL = environment.apiURL;

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  loadTheme(id: string) {
    return this.http.get<ITheme>(`${API_URL}/themes/${id}`, { withCredentials: true });
  }

  loadThemes() {
    return this.http.get<ITheme[]>(`${API_URL}/themes`, { withCredentials: true });
  }

  loadPosts(limit?: number) {
    const query = limit ? `?limit=${limit}` : ''
    return this.http.get<IPost[]>(`${API_URL}/posts${query}`, { withCredentials: true });
  }

  saveTheme(data: any) {
    return this.http.post<ITheme>(`${API_URL}/themes`, data, { withCredentials: true });
  }

  saveAd(data: any) {
    return this.http.post<IAd>(`${API_URL}/ads`, data, { withCredentials: true });
  }

  loadAd(id: string) {
    return this.http.get<IAd>(`${API_URL}/ads/${id}`, { withCredentials: true});
  }

  loadAds() {
    return this.http.get<IAd[]>(`${API_URL}/ads`, { withCredentials: true });
  }


  private images:object[] = [];
  private url: string = 'https://api.imgur.com/3/image';
  private clientId: string = '04812c6d8f84b83';
  private accessToken:string = "6bfedcb8dbc2a388bff035fe34d5d76814ae7f49";
  imageLink:any;

  uploadImage(imageFile:File, infoObject:{}|any){
    let formData = new FormData();
    
    formData.set('image', imageFile, imageFile.name);

    console.log(formData.getAll('image'))

    let header = new HttpHeaders({
      "authorization": 'Client-ID '+this.clientId
      // "authorization": 'Bearer'+this.accessToken,

      
    });
   
    // const source$ = interval(2000);
    return this.http.post<any>(this.url, formData, {headers:header});
    // if(imageData)
    // this.imageLink = imageData['data'].link;

    // let newImageObject:ImageInfo = {
    //   title:infoObject["title"],
    //   description:infoObject["description"],
    //   link:this.imageLink
    // };

    // this.images.unshift(newImageObject);

  }

}

