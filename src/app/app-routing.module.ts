import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent, AuthLayoutComponent } from './core/layouts';
import { AuthGuard, NoAuthGuard } from './core/guards';

const routes: Routes = [
    {
        path: 'dashboard',
        component: MainLayoutComponent,
        canActivate: [AuthGuard],
        loadChildren: () =>
            import('./modules/dashboard/dashboard.module').then(
                m => m.DashboardModule
            ),
    },
    {
        path: 'auth',
        component: AuthLayoutComponent,
        canActivate: [NoAuthGuard],
        loadChildren: () =>
            import('./modules/auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: '**',
        redirectTo: 'auth',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
