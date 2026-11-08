import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface HealthResponse {
  status: string;
  message: string;
  timestamp: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  async getHealth(): Promise<HealthResponse> {
    return await firstValueFrom(
      this.http.get<HealthResponse>(`${this.apiUrl}/health`)
    );
  }
}