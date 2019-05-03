import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  submitted = false;
  error = null;
  returnUrl = '';
  faBalanceScale = faBalanceScale;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit() {
    if ('/logout' === this.router.url) {
      this.logout();
    } else {
      console.log();
    }
  }

  login(f: NgForm): void {
    this.submitted = true;
    if (f.invalid) {
      return null;
    }

    this.authenticationService.login(f.value.username, f.value.password)
      .pipe(first())
      .subscribe(user => {
        if (!user.token) {
          this.error = 'Nível de acesso não autorizado.';
        } else {
          this.router.navigate(['/archives']);
        }
      },
      error => {
        this.error = 'Verifique as informações e tente novamente.';
      });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/logout']);
  }

}
