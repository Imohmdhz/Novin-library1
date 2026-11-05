import { RouterLink, Routes } from '@angular/router';
import { LoginPage } from './+pages/login-page/login-page';
import { DashboardPanel } from './+pages/+panel/dashboard-panel/dashboard-panel';
import { panelGuard } from './+guards/panel-guard';
import { BooksPage } from './+pages/+panel/books-page/books-page';
import { BorrowsPage } from './+pages/+panel/borrows-page/borrows-page';
import { SubscribersPage } from './+pages/+panel/subscribers-page/subscribers-page';
import { UsersPage } from './+pages/+panel/users-page/users-page';
import { ReportsPage } from './+pages/+panel/reports-page/reports-page';

export const routes: Routes = [
    { path: 'login', component: LoginPage },
    {
        path: 'panel',
        canActivate: [panelGuard],
        component: DashboardPanel,
        children: [
            { path: 'users', component: UsersPage },
            { path: 'books', component: BooksPage },
            { path: 'borrows', component: BorrowsPage },
            { path: 'subscribers', component: SubscribersPage },
            { path: 'reports', component: ReportsPage },
            { path: '', redirectTo: 'reports', pathMatch: "prefix" },
            { path: '**', redirectTo: 'reports' }
        ]
    },
    { path: '', redirectTo: 'panel', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];
