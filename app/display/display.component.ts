import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import * as firebase from 'firebase';
import 'firebase/firestore';



@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

 
  orders1: any;
  orders2: any;
  orders3: any;
  orders4: any;
  orders5: any;
  orders6: any;
  orders7: any;
  orders8: any;

 // orderno : any;
  private db: any;

  constructor(private location: Location) {
    this.db = firebase.firestore();
    this.loadData();

  }

  goBack() {
    this.location.back();
  }


  loadData() {
    this.getAllDocuments("Manager/2gPM1A66R4TpmqsFtmT9QGNEcml1/Order 1").then((e) => {
      this.orders1 = e;
    });
    this.getAllDocuments("Manager/2gPM1A66R4TpmqsFtmT9QGNEcml1/Order 2").then((e) => {
      this.orders2 = e;
    });
    this.getAllDocuments("Manager/2gPM1A66R4TpmqsFtmT9QGNEcml1/Order 3").then((e) => {
      this.orders3 = e;
    });
    this.getAllDocuments("Manager/2gPM1A66R4TpmqsFtmT9QGNEcml1/Order 4").then((e) => {
      this.orders4 = e;
    });
    this.getAllDocuments("Manager/2gPM1A66R4TpmqsFtmT9QGNEcml1/Order 5").then((e) => {
      this.orders5 = e;
    });
    this.getAllDocuments("Manager/2gPM1A66R4TpmqsFtmT9QGNEcml1/Order 6").then((e) => {
      this.orders6 = e;
    });
    this.getAllDocuments("Manager/2gPM1A66R4TpmqsFtmT9QGNEcml1/Order 7").then((e) => {
      this.orders7 = e;
    });
    this.getAllDocuments("Manager/2gPM1A66R4TpmqsFtmT9QGNEcml1/Order 8").then((e) => {
      this.orders8 = e;
    });

  }



  getAllDocuments(collection: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.collection(collection)
        .get()
        .then((querySnapshot) => {
          let arr = [];
          querySnapshot.forEach(function (doc) {
            var obj = JSON.parse(JSON.stringify(doc.data()));
            obj.$key = doc.id
            console.log(obj)
            arr.push(obj);
          });
          if (arr.length > 0) {
            console.log("Document data:", arr);
            resolve(arr);
          } else {
            console.log("No such document!");
            resolve(null);
          }
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }

  clearData(orderno) {

    /*************************Delete previous order */
    var collectionRef = this.db.collection("Manager").doc("2gPM1A66R4TpmqsFtmT9QGNEcml1").collection('Order ' + orderno);
    collectionRef.get()
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete().then(() => {
            console.log("Document successfully deleted previous order !");
          }).catch(function (error) {
            console.error("Error removing document: ", error);
          });
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });

  }


  ngOnInit() {
  }

}
