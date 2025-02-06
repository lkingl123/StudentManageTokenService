import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getForecasts();
  }

  getForecasts() {
    this.http.get<WeatherForecast[]>('https://localhost:7262/weatherforecast').subscribe(
      (result) => {
        console.log("API response:", result);  // Log successful response
        this.forecasts = result;
      },
      (error) => {
        console.error("API error:", error);  // Log errors
      }
    );
  }


  title = 'studentmanagetokenservice.client';
}
