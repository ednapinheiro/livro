import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UmPage } from '../um/um';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { DetalhesPage } from '../detalhes/detalhes';

@IonicPage()
@Component({
  selector: 'page-seja',
  templateUrl: 'seja.html',
})
export class SejaPage {

	private url:string = "http://localhost:3000/ep";
  public dados: Array<{}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  	this.http.get(this.url)
        .map(res => res.json())
        .subscribe(data => {
          this.dados = data;
        });
  }

  GoUm(){
    this.navCtrl.push(UmPage);
  }

  getId(id:number){
    this.navCtrl.push(DetalhesPage, {
      id: id
    })
  }
}
