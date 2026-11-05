import { Component, inject } from '@angular/core';
import { UsersService } from '../../../+services/users-service';
import { Router, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  imports: [RouterOutlet,RouterLink],
  selector: 'app-dashboard-panel',
  styleUrl: './dashboard-panel.scss',
  templateUrl: './dashboard-panel.html',
})
export class DashboardPanel {
  userservice = inject(UsersService)
  router = inject(Router);
  signout() {
    this.userservice.signout();
    this.router.navigateByUrl('/login');
  }
}
