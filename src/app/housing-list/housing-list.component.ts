import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {
	
@Input() locationListInput: HousingLocation[] = [];
results: HousingLocation[] = [];

@Output() locationSelectedSearchItemEvent = new EventEmitter<HousingLocation>();

selectHousingLocation(locationSelectedParam: HousingLocation){
	this.locationSelectedSearchItemEvent.emit(locationSelectedParam);
	}

  constructor() { }

  ngOnInit(): void {
  }
  
  
  
searchHousingLocations(searchTextLocation: string){
	if(!searchTextLocation) return;
	
	this.results= this.locationListInput.filter(
	(locationFind: HousingLocation)=> locationFind.name
	.toLowerCase()
	.includes(
	searchTextLocation.toLowerCase()
	));}
}


