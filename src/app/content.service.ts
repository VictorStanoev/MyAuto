import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost, ITheme, IAd } from './shared/interfaces';

import { environment } from '../environments/environment';
import { beforeRead } from '@popperjs/core';
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

  loadAdsByUser() {

    return this.http.get<IAd[]>(`${API_URL}/ads/myads`, { withCredentials: true });
  }

  loadAds() {

    return this.http.get<IAd[]>(`${API_URL}/ads`, { withCredentials: true });
  }

  loadAd(id: string) {
    return this.http.get<IAd>(`${API_URL}/ads/${id}`, { withCredentials: true });
  }

  updateAd(id:string, data: any) {
    return this.http.post<IAd>(`${API_URL}/ads/update/${id}`, data, { withCredentials: true });
  }

  deleteAd(id: string) {
    return this.http.delete<IAd>(`${API_URL}/ads/${id}`, { withCredentials: true });
  }

  loadLatestAds(limit?: number) {

    const query = limit ? `?limit=${limit}` : ''
    return this.http.get<IAd[]>(`${API_URL}/ads${query}`, { withCredentials: true });
  }

  searchAds(brand?: string, model?: string, engineType?: string, manifactureDate?: string, maxPrice?: string,
    transmission?: string, order?: string) {

    const params = new URLSearchParams({})

    if (brand != undefined && brand != '')
      params.append("brand", brand);

    if (model != undefined && model != '')
      params.append("model", model);

    if (engineType != undefined && engineType != '')
      params.append("engineType", engineType);

    if (manifactureDate != undefined && manifactureDate != '')
      params.append("manifactureDate", manifactureDate);

    if (maxPrice != undefined && maxPrice != '')
      params.append("maxPrice", maxPrice);

    if (transmission != undefined && transmission != '')
      params.append("transmission", transmission);

    if (order != undefined && order != '')
      params.append("order", order);



    return this.http.get<IAd[]>(`${API_URL}/ads/search?${params}`, { withCredentials: true });
  }


  private images: object[] = [];
  private url: string = 'https://api.imgur.com/3/image';
  private clientId: string = '04812c6d8f84b83';
  private accessToken: string = "6bfedcb8dbc2a388bff035fe34d5d76814ae7f49";
  imageLink: any;

  uploadImage(imageFile: File, infoObject: {} | any) {
    let formData = new FormData();

    formData.set('image', imageFile, imageFile.name);

    console.log(formData.getAll('image'))

    let header = new HttpHeaders({
      "authorization": 'Client-ID ' + this.clientId
      // "authorization": 'Bearer'+this.accessToken,


    });

    // const source$ = interval(2000);
    return this.http.post<any>(this.url, formData, { headers: header });
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

