import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClusterService {

  url="../../assets/cluster_data.json";
  myBehaviorSubject = new BehaviorSubject("");
  data:any;
  reindexdata:any;
  constructor(private http:HttpClient) { }

  public cluster_data(){
    this.http.get(this.url).subscribe((query_data)=>{
    this.data= query_data;
    this.myBehaviorSubject.next(this.data)
    });
  }

  public reindex_data(){

    console.log("success")

    //this.http.get(this.url).subscribe((reindex_data)=>{
      //
      //
    // })
  }
}
