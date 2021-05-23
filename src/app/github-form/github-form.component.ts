import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {
  getUser: string 
  @Output() addSearch = new EventEmitter<any>();

  constructor() { }
getUserName(){
  this.addSearch.emit(this.getUser);

}
  ngOnInit(): void {
  }

}