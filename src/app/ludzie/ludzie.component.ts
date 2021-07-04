import { LUDZIE } from './../mock-ludzie';
import { Czlowiek } from './../czlowiek';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../app.component';



@Component({
  selector: 'app-ludzie',
  templateUrl: './ludzie.component.html',
  styleUrls: ['./ludzie.component.scss']
})
export class LudzieComponent implements OnInit {
  @Input() posts?: Post[] | null = [];
  //ludzie = LUDZIE;
  constructor() { }

  ngOnInit(): void {
  }

}
