import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carImages:CarImage[]=[];
  cars:CarDetailDto[]=[];
  dataLoaded=false;

  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
     private carImageService:CarImageService
    
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.getCarDetails(params["carId"]);
        this.getCarImageDetails(params["carId"]);
      }
    })  }

   getCarDetails(carId:number){
    this.carService.getCarDetails(carId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }

  getCarImageDetails(carId:number){
    this.carImageService.getCarImageDetails(carId).subscribe(response=>{
      this.carImages=response.data
      this.dataLoaded=true;
    })
  }
}
