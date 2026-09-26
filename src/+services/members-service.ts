import { Service } from '@angular/core';

@Service()
export class MembersService {
    private members: member[] = [
        { id: 10, fullname: 'Aliahamdi', address: 'hamedan', phonenumber: 123456789 },
        { id: 11, fullname: 'Rezafazli', address: 'shiraz', phonenumber: 123456789 },
        { id: 11, fullname: 'Amirkhani', address: 'tehran', phonenumber: 123456789 }
    ];
    add(members: member) {
        this.members.push(members);
    }
    list() {
        return [...this.members];
    }
    update(members: member) {
        const update = this.members.find(u => u.id == members.id)
        if (update) {
            update.fullname = members.fullname;
            update.address = members.address;
            update.phonenumber = members.phonenumber;
        }
    }
    remove(id: number) {
        this.members = this.members.filter(u => u.id != id);
    }
}
export interface member {
    id: number;
    fullname: string;
    address: string;
    phonenumber: number;
}
