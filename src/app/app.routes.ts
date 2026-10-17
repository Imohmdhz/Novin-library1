import { Routes } from '@angular/router';
import { LoginPage } from './+pages/login-page/login-page';
import { DashboardPanel } from './+pages/+panel/dashboard-panel/dashboard-panel';

export const routes: Routes = [
    { path: 'login', component: LoginPage },
    { path: 'panel', component: DashboardPanel },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];
