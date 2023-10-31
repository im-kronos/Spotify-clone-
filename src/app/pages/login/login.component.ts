import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usernameFormControl =new FormControl();
  public passwordFormControl =new FormControl();
  constructor(private router:Router)
  {}

  ngOnInit(): void {
      
      };


  NavigatetoHome()
  {
    this.router.navigate(['/','']);
  }
}


