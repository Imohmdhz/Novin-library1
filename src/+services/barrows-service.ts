import { Service } from '@angular/core';

@Service()
export class BarrowsService {
    private barrows: barrow[] = [
        { id: 1000, fullname: 'Amriahmadi', date: 2024, phonenumber: 123456789 },
        { id: 1001, fullname: 'Aliahadi', date: 2024, phonenumber: 123456789 },
        { id: 1003, fullname: 'Rezazarei', date: 2022, phonenumber: 123456789 }
    ];
    add(barrows: barrow) {
        this.barrows.push(barrows);
    }
    list() {
        return [...this.barrows];
    }
    update(barrows: barrow) {
        const update = this.barrows.find(u => u.id == barrows.id)
        if (update) {
            update.fullname = barrows.fullname;
            update.date = barrows.date;
            update.phonenumber = barrows.phonenumber;
        }
    }
    remove(id: number) {
        this.barrows = this.barrows.filter(u => u.id != id);
    }
}
export interface barrow {
    id: number;
    fullname: string;
    date: number;
    phonenumber: number;
}