import { stringToFileBuffer } from '@angular-devkit/core/src/virtual-fs/host';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import { ClusterService } from 'src/app/service/cluster.service';

HighchartsMore(Highcharts);
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  query: string = '';
  bubblechart: any;
  constructor(private clusterService: ClusterService) {}
  Highcharts = Highcharts;
  clusterData:any;

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
    this.fetch_cluster_data(query);
    
  }

  public fetch_cluster_data(query:any) {
    //service call cluster service and fetch json object
    console.log('fetch cluster data call');
    this.clusterService.cluster_data();
    this.clusterService.myBehaviorSubject.subscribe(
      (data) => {
        console.log('JSON DATA',data);
        if(data){
          this.clean_cluster_data(data)
          this.clusterData = data;
          this.highchart_function(query);
        }
      }
    );
    
  }

  public clean_cluster_data(cluster_response:any){
    console.log(cluster_response.length)
  }

  public highchart_function(query: any) {
    // this.bubblechart = {

      this.bubblechart=Highcharts.chart('container',{
        plotOptions: {
          series: {
                cursor: 'pointer',
                events: {
                  
                  click: (event: any) => {
                    alert()
                    // const hl = document.getElementById('hgchart') as HTMLAnchorElement;
                    console.log(this.bubblechart.series)
                    console.log("ffff",event)
                    this.clickchart(event, query);

                  },
                },
              },
          packedbubble: {
            minSize: '20%',
            maxSize: '100%',
            layoutAlgorithm: {
              gravitationalConstant: 0.05,
              splitSeries: true,
              seriesInteraction: false,
              dragBetweenSeries: true,
              parentNodeLimit: true
            },
            dataLabels: {
              enabled: true,
              format: '{point.name}',
              filter: {
                property: 'y',
                operator: '>',
                value: 10
              },
              style: {
                color: 'black',
                textOutline: 'none',
                fontWeight: 'normal'
              }
            }
          }
        },


      series: 
      this.clusterData,
      chart: {
        type: 'packedbubble',
      },
      title: {
        text: 'Query Search',
      },

    }
    )
      
    // };
  }

  public clickchart(event: any, query: any) {
    alert(' clicked\n' + event);
    window.open('https://en.wikipedia.org/wiki/' + query);
    console.log('Chart Event' + event);
  }
}


// plotOptions: {
//   series: {
//     cursor: 'pointer',
//     events: {
      
//       click: (event: any) => {
//         alert()
//         // const hl = document.getElementById('hgchart') as HTMLAnchorElement;
//         console.log("ffff",event.target)
//         console.log(this.bubblechart.series.name)
//         this.clickchart(event, query);
//       },
//     },
//   },
// },