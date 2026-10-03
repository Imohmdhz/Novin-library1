import { Service } from '@angular/core';

@Service()
export class UsersService {
    private users: User[] = [
        { id: 1, fullname: 'Admin', username: 'admin', password: 'admin', role: 'admin' },
        { id: 2, fullname: 'Mohammad Hamzei', username: 'mohammad', password: 'hamzei', role: 'librarian' },
        { id: 3, fullname: 'Ali Habibi', username: 'ali', password: 'habibi', role: 'librarian' }
    ];
    signin(username: string, password: string) {
        const user = this.users.find(u => u.username == username && u.password == password);
        if (user) {
            user;
        }
        return undefined;
    }
    signout() {

    }
    add(user: User) {
        this.users.push(user);
    }
    list() {
        return [...this.users];
    }
    update(user: User) {
        const updatefunc = this.users.find(u => u.id == user.id)
        if (updatefunc) {
            updatefunc.fullname = user.fullname;
            updatefunc.username = user.username;
            updatefunc.role = user.role;
        }
    }
    remove(id: number) {
        this.users = this.users.filter(u => u.id != id);
    }
}
export interface User {
    id: number;
    fullname: string;
    username: string;
    password: string;
    role: string;
}