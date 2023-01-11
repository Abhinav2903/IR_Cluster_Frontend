import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  query: string = '';
  constructor() {}

  ngOnInit(): void {
    this.page_render();
  }

  public page_render() {
    console.log('page render');
    const el = document.getElementById('input_query') as HTMLInputElement;

    el?.addEventListener('keypress', (event) => {
      console.log('EL' + el.value);
      if (event.code === 'Enter') {
        this.cluster_search(JSON.stringify(el.value));
      }
    });

  }

  public cluster_search(query: any) {
    console.log('cluster search call query' + query);
  }
}
