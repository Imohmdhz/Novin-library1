import { Service } from '@angular/core';
import { Book } from './books-service';
import { Member } from './members-service';

@Service()
export class BorrowsService {
    private borrows: Borrow[] = [
        {
            id: 1000,
            borrowdate: new Date(),
            book: { id: 100, name: 'Harry potter', writer: 'J.K.Rowling' },
            member: { id: 10, fullname: 'Aliahamdi', address: 'hamedan', phonenumber: 123456789 }
        },
        {
            id: 1001,
            borrowdate: new Date(),
            book: { id: 101, name: 'Hobbit', writer: 'J.R.R.Tolkien' },
            member: { id: 11, fullname: 'Rezafazli', address: 'shiraz', phonenumber: 123456789 }
        },
        {
            id: 1002,
            borrowdate: new Date(),
            book: { id: 102, name: 'She', writer: 'H.Rider Haggard' },
            member: { id: 11, fullname: 'Amirkhani', address: 'tehran', phonenumber: 123456789 }
        },
    ];
    add(borrow: Borrow) {
        this.borrows.push(borrow);
    }
    list() {
        return [...this.borrows];
    }
    update(borrow: Borrow) {
        const updatefunc = this.borrows.find(u => u.id == borrow.id)
        if (updatefunc) {
            updatefunc.borrowdate = borrow.borrowdate;
            updatefunc.returndate = borrow.returndate;
        }
    }
    remove(id: number) {
        this.borrows = this.borrows.filter(u => u.id != id);
    }
}
export interface Borrow {
    id: number;
    book: Book;
    member: Member;
    borrowdate: Date;
    returndate?: Date;
}