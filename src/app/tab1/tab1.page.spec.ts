/* eslint-disable @typescript-eslint/naming-convention */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
// import { ApiService } from 'src/app/services/api.service';
import { Tab1Page } from './tab1.page';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;
  // let apiService;

  // const ApiServiceStub = {
  //   addJob: () => null,
  //   getJobs: () => []
  // };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
      // providers: [
      //   {provide: ApiService, useValue: ApiServiceStub}
      // ]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    // apiService = TestBed.inject(ApiService);
  }));

  it('component name should be',()=>{
    expect(component.jobName).toBe('sachin');
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('jobs should be an array', () => {
    expect(component.jobs.length).toBeDefined();
  });

  it('addJob should add the job string to jobs array', () => {
    const job = 'Dummy Job';
    // spyOn(apiService, 'addJob');
    // spyOn(apiService, 'getJobs').and.returnValue([job]);
    fixture.detectChanges();

    component.addJob(job);
    expect(component.jobs.length).toBeGreaterThan(0);
    expect(component.jobs).toContain(job);
    });


  // it('addJob should have called the apiService addJob function', () => {
  //   const job = 'Dummy Job';

  //   spyOn(apiService,'addJob');

  //   component.addJob(job);

  //   expect(apiService.addJob).toHaveBeenCalled();
  //   expect(apiService.addJob).toHaveBeenCalledWith(job);
  // });


});
