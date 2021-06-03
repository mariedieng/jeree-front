import { Component, OnInit } from '@angular/core';
import { ListesClientsService } from 'src/app/services/listes-clients.service';

@Component({
  selector: 'app-listes-clients',
  templateUrl: './listes-clients.component.html',
  styleUrls: ['./listes-clients.component.scss']
})
export class ListesClientsComponent implements OnInit {
  loading: boolean;
  listesclients: any[];

  constructor(private listesclientsService: ListesClientsService) { }

  ngOnInit(): void {
    this.loading = true;
    this.listesclientsService.getAll().subscribe(listesclients => {
      
        this.loading = false;
        this.listesclients = listesclients['hydra:member'];
        console.log(this.listesclients);
        
    });
  }

}
