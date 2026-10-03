import { Service } from '@angular/core';

@Service()
export class BooksService {
    private books: Book[] = [
        { id: 100, name: 'Harry potter', writer: 'J.K.Rowling' },
        { id: 101, name: 'Hobbit', writer: 'J.R.R.Tolkien' },
        { id: 102, name: 'She', writer: 'H.Rider Haggard' }
    ];
    add(books: Book) {
        this.books.push(books);
    }
    list() {
        return [...this.books];
    }
    update(books: Book) {
        const updatefunc = this.books.find(u => u.id == books.id)
        if (updatefunc) {
            updatefunc.name = books.name;
            updatefunc.writer = books.writer;
        }
    }
    remove(id: number) {
        this.books = this.books.filter(u => u.id != id);
    }
}
export interface Book {
    id: number;
    name: string;
    writer: string;
}