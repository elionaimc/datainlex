import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  faBalanceScale = faBalanceScale;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    if((this.username === 'ruth@datainlex.tech' && this.password === 'lalunadevalencia.2019@')
    || (this.username === 'hellen@datainlex.tech' && this.password === 'lalunadevalencia.2019@')) {
     this.router.navigate(['archives']);
    } else {
      alert('Verify username and password');
    }
  }

}
