import { Component } from '@angular/core';
import { HousingLocation } from './housing-location';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jalopyke';
  housingLocationListInterface: HousingLocation[]=[
  {
	name: "Range Rover Sport 2023",
	plateNo:"KDJ",
	town: "Mombasa",
	county: "Mombasa",
	photo: "../assets/rangerover.jpg",
	price: 14000000,
	tradeIn: false,
},
{
	name: "Lambogini Aventador",
	plateNo:"KDJ",
	town: "Mombasa",
	county: "Mombasa",
	photo: "../assets/avendator.jpg",
	price: 230000000,
	tradeIn: false,
	},
{
	name: "Prado TX",
	plateNo:"KCB",
	town: "Nakuru",
	county: "Nakuru",
	photo: "../assets/landcr.jpg",
	price: 3400000,
	tradeIn: true,
	},
	
	{
	name: "Nissan Navara",
	plateNo:"KCW",
	town: "Kisumu",
	county: "Kisumu",
	photo: "../assets/navara.jpg",
	price: 4000000,
	tradeIn: true,},
	
	{
	name: "Nissan Suv",
	plateNo:"KCW",
	town: "Kisumu",
	county: "Kisumu",
	photo: "../assets/nissansuv.jpg",
	price: 4000000,
	tradeIn: true,},
	
	{
	name: "AMG 63",
	plateNo:"KDJ",
	town: "Nairobi",
	county: "Nairobi",
	photo: "../assets/amgsplash.jpg",
	price: 43000000,
	tradeIn: false,},
	
	{name: "Mazda CX6",
	plateNo:"KBD",
	town: "Juja",
	county: "Kiambu",
	photo: "../assets/mazdasplash.jpg",
	price: 3400000,
	tradeIn: true,},
	
	{name: "Nissan Murano Sport",
	plateNo:"KBD",
	town: "Juja",
	county: "Kiambu",
	photo: "../assets/murano.jpg",
	price: 3400000,
	tradeIn: true,}
	
  ]
  selectedLocationObject: HousingLocation | undefined;
  
  updateSelectedLocation(locationParam: HousingLocation){ 
	this.selectedLocationObject=locationParam;
	  } searchHousingLocations() {}
  
}
