import { Component, OnInit } from '@angular/core';
import { ListesLivreursService } from 'src/app/services/listes-livreurs.service';

@Component({
  selector: 'app-listes-livreurs',
  templateUrl: './listes-livreurs.component.html',
  styleUrls: ['./listes-livreurs.component.scss']
})
export class ListesLivreursComponent implements OnInit {
  loading: boolean;
  listeslivreurs: any;

  constructor(private listeslivreursService: ListesLivreursService) { }

  ngOnInit(): void {
   
    this.loading = true;
    console.log(this.listeslivreursService);
    this.listeslivreursService.getAll().subscribe(listeslivreurs => {
      
      this.loading = false;
      this.listeslivreurs = listeslivreurs['hydra:member'];
      console.log(this.listeslivreurs);
      
  });
    
    
        
    
  }

}
