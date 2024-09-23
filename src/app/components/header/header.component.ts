import { Component } from '@angular/core';
import { LogoComponent } from '../common/logo/logo.component';
import { UserInfoComponent } from '../common/user-info/user-info.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, UserInfoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
