import { Component } from '@angular/core';
import { LocationsService } from 'src/app/core/services/locations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  lat: number = 51.673858;
  lng: number = 7.815982;
  markers: marker[] = [];
  user: string

  constructor(private locationsService: LocationsService, private activatedRoute: ActivatedRoute,
    private route: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.user = this.authService.getUser();

    this.getLocations();
  }

  mapClicked($event: any) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });
  }

  logOut() {
    this.authService.logout();
    this.route.navigateByUrl("/");
  }

  getLocations() {
    this.locationsService.getLocations(this.user).subscribe(val => {
      this.markers = val.locations,
        error => alert("error receiving data")
    });
  }

  submitLocations() {
    this.locationsService.saveLocations(this.user, this.markers).subscribe(
      data => console.log('success'),
      error => {
        if (error.statusCode >= 400) {
          alert("error sending data")
        }
        alert("succeeded updating data")
      }
    )
  }
}

export interface marker {
  lat: number;
  lng: number;
}