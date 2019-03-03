import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usptodata } from './models/usptodata';
import { Company } from './models/company';
import { Search } from './models/search';

@Injectable({
  providedIn: 'root'
})

export class PatentService {

  constructor(private http: HttpClient) { }
	
	  getAll(): Observable<any> {
    	return this.http.get<Usptodata>('//localhost:8080/patents?rows=1700&searchText="4G"');
  	}

    getAllC(): Observable<any> {
      return this.http.get<Company>('//localhost:8080/patents/bycompany');
    }

    getAllC1(): Observable<any> {
      return this.http.get<Search>('//localhost:8080/patents/search');
    }

}
