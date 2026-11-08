import { Component, OnInit, inject } from '@angular/core';
import { ApiService, HealthResponse } from './core/services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit {

  private apiService = inject(ApiService);

  health: HealthResponse | null = null;
  loading = false;
  error: string | null = null;

  async ngOnInit(): Promise<void> {
    await this.checkApi();
  }

  async checkApi(): Promise<void> {

    this.loading = true;
    this.error = null;

    try {
      this.health = await this.apiService.getHealth();

    } catch (err) {
      console.error('Error conectando con la API:', err);
      this.error = 'No se ha podido conectar con el servidor';

    } finally {
      this.loading = false;
    }
  }
}