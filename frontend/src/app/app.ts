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

  loading = true;
  health: HealthResponse | null = null;
  error: string | null = null;

  ngOnInit(): void {
    this.apiService.getHealth().subscribe({
      next: (response) => {
        this.health = response;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'No se ha podido conectar con la API';
        this.loading = false;
        console.error(err);
      }
    });
  }
}