import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListesClientsService } from 'src/app/services/listes-clients.service';

@Component({
  selector: 'app-modifier-clients',
  templateUrl: './modifier-clients.component.html',
  styleUrls: ['./modifier-clients.component.scss']
})
export class ModifierClientsComponent implements OnInit {

  
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  formConnexion: any;

  constructor( private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private clientservice: ListesClientsService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      nom:  ['', Validators.required],
      prenom: ['', Validators.required],
      Adresse_Client: ['', Validators.required],
       Tel_Client: ['', Validators.required],

     
  });
  this.route.params.subscribe(params => {
    this.clientservice.getId(params.id).subscribe(data => {
      this.loginForm.patchValue(data);
      console.log(data);
      
    });
  });
     

  }
  onSubmit(){
    const  client = {
      nom: this.loginForm.value.nom ,
      prenom:this.loginForm.value.prenom,
      Adresse_Client:this.loginForm.value. Adresse_Client,
       Tel_Client:this.loginForm.value.Tel_Client,
  };
  
  // this.clientservice.CreateCompteClient(client).subscribe(
  //   data => {
  //     console.log(data);
  //     return this.router.navigate(['/compte_client']);
       

  //   },
  //   error => {
  //    /* this.errorMessage = 'username ou mot de passe incorrect';*/
  //     console.log(error);

  // });
  }
  
}
