import { Component, inject, OnInit, signal } from '@angular/core';
import { Book, BooksService } from '../../../+services/books-service';

@Component({
  imports: [],
  selector: 'app-books-page',
  styleUrl: './books-page.scss',
  templateUrl: './books-page.html',
})
export class BooksPage implements OnInit {
  ngOnInit(): void {
    this.loading.set(true);
    this.booksService.list().subscribe({
      next: (result) => {
        this.loading.set(false);
        this.data.set(result);
      }
    })
  }
  loading = signal(false);
  booksService = inject(BooksService);
  data = signal<Book[]>([]);
}
