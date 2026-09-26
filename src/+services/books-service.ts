import { Service } from '@angular/core';

@Service()
export class BooksService {
    private books: book[] = [
        { id: 100, name: 'Harry potter', writer: 'J.K.Rowling' },
        { id: 101, name: 'Hobbit', writer: 'J.R.R.Tolkien' },
        { id: 102, name: 'She', writer: 'H.Rider Haggard' }
    ];
    add(books: book) {
        this.books.push(books);
    }
    list() {
        return [...this.books];
    }
    update(books: book) {
        const update = this.books.find(u => u.id == books.id)
        if (update) {
            update.name = books.name;
            update.writer = books.writer;
        }
    }
    remove(id: number) {
        this.books = this.books.filter(u => u.id != id);
    }
}
export interface book {
    id: number;
    name: string;
    writer: string;
}
