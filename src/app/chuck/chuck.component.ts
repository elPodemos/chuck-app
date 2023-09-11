import { Component, OnInit } from '@angular/core';
import { JokeInterface } from '../joke.interface';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {

  constructor(
    private service:JokeService
    ){}

  joke: JokeInterface | undefined;

  ngOnInit(): void {

    this.service.getJoke().subscribe(data => {
      this.joke = data;

      console.log("Votre blague est égal à:" + this.joke.value);
    });

  }

}
