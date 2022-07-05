import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sidebar } from '../interfaces/sidebar';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private http: HttpClient) { }

  getSidebar(): Observable<Sidebar[]> {
    return this.http.get<Sidebar[]>('./assets/data/sidebar.json')
  }

}
