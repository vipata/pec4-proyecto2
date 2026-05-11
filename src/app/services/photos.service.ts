import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo.interface';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  // private api = 'https://picsum.photos/v2/list';
  private apiKey = '4fanksY83emcyM1Jq3oDnYfHfReU12jNfiCcOkGQ';
  private baseUrl = 'https://api.nasa.gov/planetary/apod';

  constructor(private http: HttpClient) {}

  getPhotos(count: number = 20): Observable<Photo[]> {
    return this.http.get<Photo[]>(
      `${this.baseUrl}?count=${count}&api_key=${this.apiKey}`,
    );
  }

  getPhotoById(date: string): Observable<Photo> {
    return this.http.get<Photo>(
      `${this.baseUrl}?date=${date}&api_key=${this.apiKey}`,
    );
  }
}
