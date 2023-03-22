import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { FireAuthService } from './../../services/fire-auth.service';


@Component({
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.css']
})
export class MainToolbarComponent {

  constructor(
    private auth: FireAuthService,
    private router: Router
  ) { }

  user$ = this.auth.authState$.pipe(
    tap(state => !!state)
  )

  logout() {
    this.auth.logout().then(() => this.router.navigate(['/login']))
  }

}
