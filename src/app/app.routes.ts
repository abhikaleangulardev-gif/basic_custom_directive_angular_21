import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'highlight', loadComponent: () => import('./component/highlight/highlight').then((c) => c.Highlight) },
    { path: 'mouse', loadComponent: () => import('./component/mouse/mouse').then((c) => c.Mouse) },
    { path: 'dynamic-color', loadComponent: () => import('./component/dynamice-color/dynamice-color').then((c) => c.DynamiceColor) },
    { path: 'disable-button', loadComponent: () => import('./component/disable-button/disable-button').then((c) => c.DisableButton) },
    { path: 'auto-focus', loadComponent: () => import('./component/auto-focus/auto-focus').then((c) => c.AutoFocus) },
];
