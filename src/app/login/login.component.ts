import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  //styleUrls para que agrgar este estilo css al componente (Pasandole la ruta)
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
