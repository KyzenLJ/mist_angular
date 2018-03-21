import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Agent } from '../agent';
import { AgentService } from '../agent.service'


@Component({
  selector: 'app-creation-agent',
  templateUrl: './creation-agent.component.html',
  styleUrls: ['./creation-agent.component.css']
})

export class CreationAgentComponent implements OnInit {

  agent: Agent = new Agent();

  ngOnInit() { }

  constructor(private router: Router, private agentService: AgentService) { }

  createAgent(agent): void {
    this.agentService.createAgent(this.agent)
      .subscribe(data => {
        alert("L'agent a bien été créé");
      });

  }
}
