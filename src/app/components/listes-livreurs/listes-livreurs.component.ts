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
      this.listeslivreurs = listeslivreurs;
      console.log(this.listeslivreurs);
      
  });
    
    
        
    
  }
  deleteLivreur(id: number) {
    if ( confirm('Etes vous  sur de vouloir supprimer ce livreur')) {
      this.listeslivreursService.deleteLivreur(id).subscribe(data => {
        console.log(data);
        location.reload();
      });
    }
  }

}
