import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  postProduct(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/records', data);
  }

  getProduct(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/records');
  }

  updateProduct(item: any): Observable<any> {
    const url = `http://localhost:3000/records/${item.id}`;
    return this.http.put(url, item);
  }
  
  
  
  

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/records/' + id);
  }
}
