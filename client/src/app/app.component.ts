import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app12';
  ngOnInit() {
    localStorage.setItem('userId', '5c83782a26220e732d6f9b29');
    localStorage.setItem('token', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYmJhdGgyIiwidXNlcklkIjoiNWM4Mzc4MmEyNjIyMGU3MzJkNmY5YjI5IiwiaWF0IjoxNTUyMTI5NTg0LCJleHAiOjE1NTIxMzMxODR9.Dwi9fvktSQQl23MuA-9GKQUBvPHf6glnjZxouQfSkm-BHg4Yuhu7OSnKiJdVWKM6Sd5y_qNDFtmOBv5AVRozQg');
    localStorage.setItem('username', 'abbath2');
  }
}
