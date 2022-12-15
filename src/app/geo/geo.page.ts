import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.page.html',
  styleUrls: ['./geo.page.scss'],
})
export class GeoPage implements OnInit {

  constructor(public geolocation : Geolocation) {

   }

   ngAfterViewInit(){
    this.geolocationNative();
   }

   geolocationNative(){
      this.geolocation.getCurrentPosition().then((geoposition: Geoposition) => {
        console.log(geoposition);
      })

   }

  ngOnInit() {
  }

}
