import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public readonly appService: AppService, public router: Router) {}

  public fakeRequest() {
    this.appService.fakeRequest();
    this.router.navigateByUrl('decision');
  }
}
