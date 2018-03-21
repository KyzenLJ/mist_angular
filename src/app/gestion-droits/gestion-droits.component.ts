import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-droits',
  templateUrl: './gestion-droits.component.html',
  styleUrls: ['./gestion-droits.component.css']
})

export class GestionDroitsComponent implements OnInit {
  
  profils = [
    'Profil 1',
    'Profil 2',
    'Profil 3',
    'Profil 4',
  ];

  agent: string;

  agents = [
    'Agent 1',
    'Agent 2',
    'Agent 3',
    'Agent 4',
  ];
   
    constructor() { }

    ngOnInit() { 
      
    } 


  }




