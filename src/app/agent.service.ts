import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Agent } from './agent';
import { Observable } from 'rxjs/Observable';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable()
export class AgentService {

  constructor(private http:  HttpClient) {}

  private agentUrl = 'http://localhost:8080/api/utilisateur';

  public createAgent(agent: Agent): Observable<Agent> {
    console.log('creation agent');
    return this.http.post<Agent>(this.agentUrl, agent, httpOptions);
  }

  public getAllAgent(): Observable<Agent []> {
    return this.http.get<Agent[]>(this.agentUrl);
  }

<<<<<<< HEAD
  public deleteAgent(agent: Agent): Observable<Agent> {
    return this.http.post<Agent>(this.agentUrl, agent, httpOptions);
=======
  public deleteAgent(id: number): Observable<Agent> {
    const url = `${this.agentUrl}/${id}`;
    return this.http.delete<Agent>(url, httpOptions);
>>>>>>> 17a96287dacce8c6cad05caf9839fc9915b525f1
  }

}
