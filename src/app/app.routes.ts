import { Routes } from '@angular/router';
import { UserInfoComponent } from './components/common/user-info/user-info.component';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { UsersComponent } from './components/users/users.component';
import { RoleGuard } from './guards/role.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
            { path: '', component: MainComponent },
            { path: 'user-info/:id', component: UserInfoComponent },
        ],
    },
    {
        path: 'admin',
        canActivate: [AuthGuard, RoleGuard('admin')],
        children: [
            { path: '', component: UsersComponent },
        ],        
    }
];
