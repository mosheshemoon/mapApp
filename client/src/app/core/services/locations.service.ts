import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { marker } from 'src/app/pages';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {

  constructor(
    private http: HttpClient
  ) { }

  saveLocations(userName: string, locations: marker[]): Observable<any> {
    const href = `/userLocations?userName=${userName}`;

    return this.http.post(href, { userName, locations }) as any;
  }

  getLocations(userName: string): Observable<any> {
    const href = `/userLocations?userName=${userName}`;

    return this.http.get(href) as any;
  }
}
