import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListesClientsService } from 'src/app/services/listes-clients.service';

@Component({
  selector: 'app-listes-clients',
  templateUrl: './listes-clients.component.html',
  styleUrls: ['./listes-clients.component.scss']
})
export class ListesClientsComponent implements OnInit {
  loading: boolean;
  listesclients: any[];

  constructor(private listesclientsService: ListesClientsService, private route: Router) { }

  ngOnInit(): void {
    this.loading = true;
    this.listesclientsService.getAll().subscribe(listesclients => {
      
        this.loading = false;
        this.listesclients = listesclients;
        console.log(this.listesclients);
        
    });
  }
  deleteClient(id: number) {
    if ( confirm('Etes vous  sur de vouloir supprimer ce client')) {
      this.listesclientsService.deleteClient(id).subscribe(data => {
        console.log(data);
        location.reload();
      });
    }
  }
  getid(id :number){
    this.route.navigate(['/modifierc', id]);
  }
 
}
