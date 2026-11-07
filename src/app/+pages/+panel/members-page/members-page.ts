import { Component, inject, OnInit, signal } from '@angular/core';
import { Member, MembersService } from '../../../+services/members-service';

@Component({
  imports: [],
  selector: 'app-members-page',
  styleUrl: './members-page.scss',
  templateUrl: './members-page.html',
})
export class MembersPage implements OnInit {
  ngOnInit(): void {
    this.loading.set(true);
    this.membersService.list().subscribe({
      next: (result) => {
        this.loading.set(false);
        this.data.set(result);
      }
    })
  }
  loading = signal(false);
  membersService = inject(MembersService);
  data = signal<Member[]>([]);
}
