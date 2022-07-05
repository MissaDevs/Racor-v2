import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './components/errors/error404/error404.component';
import { CommandsComponent } from './components/home/commands/commands.component';
import { HomeComponent } from './components/home/home.component';
import { PremiumComponent } from './components/home/premium/premium.component';
import { ServersComponent } from './components/home/servers/servers.component';
import { DsahGuard } from './guards/dsah-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'commands',
    component: CommandsComponent
  },
  { path: 'servers',
    component: ServersComponent
  },
  {
    path: 'premium',
    component: PremiumComponent
  },
  {
    path: 'auth/redirect',
    redirectTo: '/dashboard'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivateChild: [DsahGuard]
  },

  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
