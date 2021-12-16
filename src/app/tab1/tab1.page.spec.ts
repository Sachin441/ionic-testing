import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1Page } from './tab1.page';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
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

    component.addJob(job);
    expect(component.jobs.length).toBeGreaterThan(0);
    expect(component.jobs).toContain(job);
    });

});
