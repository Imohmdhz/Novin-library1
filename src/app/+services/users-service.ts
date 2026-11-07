import { Service } from '@angular/core';
import { delay, of } from 'rxjs';

@Service()
export class UsersService {
    private users: User[] = [
        { id: 1, fullname: 'Library Admin', username: 'admin', password: 'admin', role: 'admin' },
        { id: 2, fullname: 'Mohammad Hamzei', username: 'mohammad', password: 'hamzei', role: 'librarian' },
        { id: 3, fullname: 'Ali Habibi', username: 'ali', password: 'habibi', role: 'librarian' }
    ];
    currentUser: User | undefined;
    signin(username: string, password: string) {
        const user = this.users.find(u => u.username == username && u.password == password);
        if (user) {
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUser = user;
            return user;
        }
        return undefined;
    }
    sessionSignIn() {
        if (!this.currentUser)
            if (sessionStorage.getItem('currentUser'))
                this.currentUser = JSON.parse(sessionStorage.getItem('currentUser')!);
            else if (localStorage.getItem('currentUser'))
            {
                this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
                sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            }
    }
    keep() {
        localStorage.setItem('currentUser', sessionStorage.getItem('currentUser')!);
    }
    signout() {
        this.currentUser = undefined;
        sessionStorage.removeItem('currentUser');
        localStorage.removeItem('currentUser');
    }
    add(user: User) {
        this.users.push(user);
    }
    list() {
        return of([...this.users]).pipe(delay(1000));
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