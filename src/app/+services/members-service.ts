import { Service } from '@angular/core';

@Service()
export class MembersService {
    private members: Member[] = [
        { id: 10, fullname: 'Aliahamdi', address: 'hamedan', phonenumber: 123456789 },
        { id: 11, fullname: 'Rezafazli', address: 'shiraz', phonenumber: 123456789 },
        { id: 11, fullname: 'Amirkhani', address: 'tehran', phonenumber: 123456789 }
    ];
    add(members: Member) {
        this.members.push(members);
    }
    list() {
        return [...this.members];
    }
    update(members: Member) {
        const updatefunc = this.members.find(u => u.id == members.id)
        if (updatefunc) {
            updatefunc.fullname = members.fullname;
            updatefunc.address = members.address;
            updatefunc.phonenumber = members.phonenumber;
        }
    }
    remove(id: number) {
        this.members = this.members.filter(u => u.id != id);
    }
}
export interface Member {
    id: number;
    fullname: string;
    address: string;
    phonenumber: number;
}