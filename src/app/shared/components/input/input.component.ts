import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  public search: string='';

  onSearch( search:string ) {
    this.search = search;
    console.log(search);
  } 

}
