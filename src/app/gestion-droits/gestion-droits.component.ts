import { Component, OnInit } from '@angular/core';
import { Agent } from '../agent';
import { AgentService } from '../agent.service';

@Component({
selector: 'app-gestion-droits',
templateUrl: './gestion-droits.component.html',
styleUrls: ['./gestion-droits.component.css']
})

export class GestionDroitsComponent implements OnInit {
<<<<<<< HEAD

estSelect = false;
public agents: Agent[];
profil: string;
agentSelected: Agent;
  
  profils = [
    'Profil 1',
    'Profil 2',
    'Profil 3',
    'Profil 4',
  ];
   
    constructor(private agentService: AgentService) { }

    ngOnInit() { 
      this.getAllAgent();
      }

    getAllAgent(): void {
      this.agentService.getAllAgent().subscribe(agents => this.agents = agents);
    }

    deleteAgent() {
      this.agentService.deleteAgent(this.agentSelected.id).subscribe(() => this.getAllAgent());
    }

    agentSelectionne(agent: Agent) {
      this.agentSelected = agent;
      this.estSelect = true;
    }

}



=======
>>>>>>> 17a96287dacce8c6cad05caf9839fc9915b525f1

estSelect = false;
public agents: Agent[];
profil: string;
agentSelected: Agent;
profils = [
'Profil 1',
'Profil 2',
'Profil 3',
'Profil 4',
];

constructor(private agentService: AgentService) { }

ngOnInit() {
  this.getAllAgent();
}

getAllAgent(): void {
  this.agentService.getAllAgent().subscribe(agents => this.agents = agents);
}

deleteAgent() {
  this.agentService.deleteAgent(this.agentSelected.id).subscribe(() => this.getAllAgent());
}

agentSelectionne(agent: Agent) {
  this.agentSelected = agent;
  this.estSelect = true;
}

}