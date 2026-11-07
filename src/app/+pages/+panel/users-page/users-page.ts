import { Component, inject, OnInit, signal } from '@angular/core';
import { User, UsersService } from '../../../+services/users-service';

@Component({
  imports: [],
  selector: 'app-users-page',
  styleUrl: './users-page.scss',
  templateUrl: './users-page.html',
})
export class UsersPage implements OnInit {
  ngOnInit(): void {
    this.loading.set(true);
    this.usersService.list().subscribe({
      next: (result) => {
        this.loading.set(false);
        this.data.set(result);
      }
    })
  }
  loading = signal(false);
  usersService = inject(UsersService);
  data = signal<User[]>([]);
}
