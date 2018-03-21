import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suppression-agent',
  templateUrl: './suppression-agent.component.html',
  styleUrls: ['./suppression-agent.component.css']
})
export class SuppressionAgentComponent implements OnInit {

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
