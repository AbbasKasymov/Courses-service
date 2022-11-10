import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../../services/auth.guard';
import { AuthenticationService } from '../../services/authentication.service';
import { DataSharingService } from '../../services/data-sharing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Input() userName: string;
  title: string = 'video course';
  // userEmail = '';

  isLoggedIn: boolean;

  constructor(
    private auth: AuthenticationService,
    private dataSharing: DataSharingService,
    private router: Router
  ) {
    this.dataSharing.isLoggedIn.subscribe((value) => {
      this.isLoggedIn = value;
    });
  }

  onLogout() {
    this.auth.logout();
    this.router.navigate(['/404']);
  }
  ngOnInit(): void {}
}
