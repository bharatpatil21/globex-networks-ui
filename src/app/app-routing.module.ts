import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./module/layout/layout.module').then(m => m.LayoutModule)},
  { path: 'login',
    loadChildren: () => import('./module/login/login.module').then(m => m.LoginModule)},
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
