import { Component, SimpleChanges, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent, SidebarComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  authService = inject(AuthService);
  isAuth = this.authService.checkAuth();
}
