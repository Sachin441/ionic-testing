import { Component } from '@angular/core';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  jobName='sachin';
  jobs=[];
    constructor(){}

  addJob(job: string){
    this.jobs.push(job);
  }

}
