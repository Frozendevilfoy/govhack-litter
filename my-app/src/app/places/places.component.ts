import { Component, OnInit } from '@angular/core';
import {PlaceInfo} from '../place_info';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  place: PlaceInfo = {
    id: 1,
    name: "Brisbane"
  }
  /**
   * This data is going to fetch from API
   * 
   */

  constructor() { }

  ngOnInit() {
  }

}
