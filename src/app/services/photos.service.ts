import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo.interface';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  private apiKey = '4fanksY83emcyM1Jq3oDnYfHfReU12jNfiCcOkGQ';
  private baseUrl = 'https://api.nasa.gov/planetary/apod';

  constructor(private http: HttpClient) {}

  getPhotos(count: number = 20): Observable<Photo[]> {
    // Fechas de inicio y fin para obtener las fotos de los últimos 'count' días
    const dtStartDate = new Date();
    const dtEndDate = new Date();

    // Restar 'count - 1' días a la fecha de fin para obtener la fecha de inicio
    dtStartDate.setDate(dtEndDate.getDate() - (count - 1));

    // Convertir las fechas a formato ISO y extraer solo la parte de la fecha (YYYY-MM-DD)
    const endDate = dtEndDate.toISOString().split('T')[0];
    const startDate = dtStartDate.toISOString().split('T')[0];

    return this.http.get<Photo[]>(
      // Cadena de consulta para obtener 20 fotros
      // `${this.baseUrl}?count=${count}&api_key=${this.apiKey}`,
      // Cadena de consulta para obtener fotos entre dos fechas
      `${this.baseUrl}?start_date=${startDate}&end_date=${endDate}&api_key=${this.apiKey}`,
    );
  }

  getPhotoById(date: string): Observable<Photo> {
    return this.http.get<Photo>(
      `${this.baseUrl}?date=${date}&api_key=${this.apiKey}`,
    );
  }
}
