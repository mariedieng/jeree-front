import { Component, OnInit } from '@angular/core';
import { ListesVendeursService } from 'src/app/services/listes-vendeurs.service';

@Component({
  selector: 'app-listes-vendeurs',
  templateUrl: './listes-vendeurs.component.html',
  styleUrls: ['./listes-vendeurs.component.scss']
})
export class ListesVendeursComponent implements OnInit {
  loading: boolean;
  listesvendeurs: any[];

  constructor(private listesvendeursService: ListesVendeursService) { }

  ngOnInit(): void {

    this.loading = true;
    this.listesvendeursService.getAll().subscribe(listesvendeurs => {
      
        this.loading = false;
        this.listesvendeurs = listesvendeurs['hydra:member'];
        console.log(this.listesvendeurs);
        
    });
  }

}
