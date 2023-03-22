import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['/home']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    title: 'Login',
    path: 'login',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToHome },
    loadChildren: () => import('./modules').then(m => m.LoginModule)
  },
  {
    title: 'Register',
    path: 'register',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectLoggedInToHome },
    loadChildren: () => import('./modules').then(m => m.RegisterModule)
  },
  {
    title: 'Home',
    path: 'home',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadChildren: () => import('./modules').then(m => m.HomeModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
