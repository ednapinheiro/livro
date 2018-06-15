import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Deta } from '../../model/deta';

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
})
export class DetalhesPage {
  public id;
  public obg: any;
  public deta: Deta;
  public data:any;

  getEpisodeById(id: number) {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http
        .get(`http://localhost:3000/ep/${id}`)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.id = navParams.get("id");
    this.deta = new Deta();
    this.getEpisodeById(this.id).then(data => {
    this.obg = data;
    this.deta.img = this.obg.img;
    this.deta.nome = this.obg.nome;
    this.deta.sinopse = this.obg.sinopse;
    this.deta.episodios = this.obg.episodios;
    this.deta.datalanc = this.obg.datalanc;
    console.log(this.deta);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
  }

}
