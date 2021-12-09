import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private jobs = [];
  constructor(private alertController: AlertController) { }
  getJobs() {
    return this.jobs;
  }
  addJob(job: string) {
    this.jobs.push(job);
    this.presentAlert(`A new Job ${job} has been added`);
  }
  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Job Added',
      message: msg,
    });

    await alert.present();
  }
}
