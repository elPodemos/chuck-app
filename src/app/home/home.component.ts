import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  titleHome:string = "Chuck Norris";
  
  ngOnInit(): void {
    console.log("Le composent HOME vient d'être charger");
  }

}
