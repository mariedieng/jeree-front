import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ListesUsersService } from 'src/app/services/listes-users.service';

@Component({
  selector: 'app-listes-users',
  templateUrl: './listes-users.component.html',
  styleUrls: ['./listes-users.component.scss']
})
export class ListesUsersComponent implements OnInit {
  loading: boolean;
  listesusers: import("/home/mariedieng/demo-jeere/src/app/models/user").User[];

  constructor(private listesusersService: ListesUsersService) { }

  ngOnInit(): void {
    this.loading = true;
    this.listesusersService.getAll().subscribe(listesusers => {
      
        this.loading = false;
        this.listesusers = listesusers['hydra:member'];
        console.log(this.listesusers);
        
    });
  }

}
