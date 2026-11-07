import { Component, inject, OnInit, signal } from '@angular/core';
import { Borrow, BorrowsService } from '../../../+services/borrows-service';

@Component({
  imports: [],
  selector: 'app-borrows-page',
  styleUrl: './borrows-page.scss',
  templateUrl: './borrows-page.html',
})
export class BorrowsPage implements OnInit {
  ngOnInit(): void {
    this.loading.set(true);
    this.borrowsService.list().subscribe({
      next: (result) => {
        this.loading.set(false);
        this.data.set(result);
      }
    })
  }
  loading = signal(false);
  borrowsService = inject(BorrowsService);
  data = signal<Borrow[]>([]);
}
