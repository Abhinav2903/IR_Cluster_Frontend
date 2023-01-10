import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {

  icon = document.querySelector(".icon"); 
  search = document.querySelector(".search");
  constructor() {}

  ngOnInit(): void {
    console.log("search page")
  }

  public page_render(){
   
// this.icon.onclick = function () {
// this.	search.classList.toggle("active");
// };
  }

}
