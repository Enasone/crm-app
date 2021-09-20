import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  auth: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  reg(bool: boolean): void {
    this.auth = bool
  }
}
