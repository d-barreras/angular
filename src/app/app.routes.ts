import { Routes } from '@angular/router';
import { LogoComponent } from './components/common/logo/logo.component';
import { UserInfoComponent } from './components/common/user-info/user-info.component';
import { MainComponent } from './components/main/main.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'logo', component: LogoComponent },
    { path: 'user-info/:id', component: UserInfoComponent, canActivate: [authGuard] },
    //{ path: '', redirectTo: '/home', pathMatch: 'full' }
];
