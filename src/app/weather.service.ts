import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(name: string) {
    return this.http.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${name}&APPID=8691f94112783ae4233115065f4fc3d2`,
      { responseType: 'text' }
    );
  }
}
