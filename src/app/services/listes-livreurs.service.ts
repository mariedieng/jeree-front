import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListesLivreursService {
  

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any[]>(`${environment.apiUrl}/api/listes/livreurs`);
}
deleteLivreur(id: number){
  return this.http.delete<any[]>(`${environment.apiUrl}/api/livreurs/` + id);
}
getId(id: number): Observable<any> {
  const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
  return this.http.put(`${environment.apiUrl}/api/livreurs/` + id, { headers});
}

}
