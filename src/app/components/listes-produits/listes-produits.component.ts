import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListesProduitsService } from 'src/app/services/listes-produits.service';

@Component({
  selector: 'app-listes-produits',
  templateUrl: './listes-produits.component.html',
  styleUrls: ['./listes-produits.component.scss']
})
export class ListesProduitsComponent implements OnInit {
  loading: boolean;
  listesproduits: any;

  constructor(private listesProduitsService: ListesProduitsService , private route: Router ) { }

  ngOnInit(): void {
    this.loading = true;
    console.log(this.listesProduitsService);
    this.listesProduitsService.getAll().subscribe(listesproduits => {
      
      this.loading = false;
      this.listesproduits = listesproduits;
      console.log(this.listesproduits);
      
  });
  
  }
  deleteProduit(id: number) {
    if ( confirm('Etes vous  sur de vouloir supprimer ce produit')) {
      this.listesProduitsService.deleteProduit(id).subscribe(data => {
        console.log(data);
        location.reload();
      });
    }
  }
  getid(id :number){
    this.route.navigate(['/modifierp', id]);
  }
 

}
