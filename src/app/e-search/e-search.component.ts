import { Component, OnInit } from '@angular/core';
import { Cours } from '../models/Cours';
import { cours } from '../models/mockCours';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-e-search',
  templateUrl: './e-search.component.html',
  styleUrls: ['./e-search.component.css']
})
export class ESearchComponent implements OnInit {
cours:Cours[]=[]
size=0;
motCle:string='';
  constructor(private route:ActivatedRoute) { 
    this.motCle=this.route.snapshot.params['id'];
  }
 
  ngOnInit() {  
    this.route.params.subscribe( params =>
    this.motCle = params['id']);
    this.cours=cours;
    this.size=this.cours.length;
  }
  toString( val: number){

    return val.toString();
  }
}
