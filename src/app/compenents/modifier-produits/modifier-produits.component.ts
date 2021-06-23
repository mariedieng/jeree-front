import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ListesCategoriesService } from 'src/app/services/listes-categories.service';
import { ListesProduitsService } from 'src/app/services/listes-produits.service';

@Component({
  selector: 'app-modifier-produits',
  templateUrl: './modifier-produits.component.html',
  styleUrls: ['./modifier-produits.component.scss']
})
export class ModifierProduitsComponent implements OnInit {

   
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  categorie : any;

  constructor( private formBuilder: FormBuilder,private categoriesservice : ListesCategoriesService ,
    private router: ActivatedRoute ,private listesproduitsservices: ListesProduitsService  ) { }

  ngOnInit(): void {
    this.categoriesservice.getAll().subscribe(data=>{
      this.categorie = data['hydra:member'];
      console.log(this.categorie);
      
    })
    this.loginForm = this.formBuilder.group({
      nomProduit:  ['', Validators.required],
      prixUnitaire: ['', Validators.required],
      quantiteStock: ['', Validators.required],
      caracteristique: ['', Validators.required],
      description: ['', Validators.required],
      categorie: ['', Validators.required],


     
  });

    this.router.params.subscribe(params =>{
      this.listesproduitsservices.getId(params.id).subscribe(data => {
        this.loginForm.patchValue(data);
        console.log(data);
        
      });
    })
  }
  onSubmit(){
    const  produit = {
      nomProduit: this.loginForm.value.nomProduit ,
      prixUnitaire:this.loginForm.value.prixUnitaire,
     quantiteStock:this.loginForm.value.quantiteStock,
        caracteristique:this.loginForm.value. caracteristique,
       description:this.loginForm.value.description,
        categorie:`/api/categorie_produis/${this.loginForm.value.categorie}`,
        
  };
  console.log(produit);
  this.listesproduitsservices.update(produit,this.router.snapshot.params.id).subscribe(data=>{
    alert('modifier produit')
  })
  

  }
}
