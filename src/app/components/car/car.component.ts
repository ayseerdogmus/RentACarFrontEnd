import { Component, OnInit } from '@angular/core';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarResponseModel } from 'src/app/models/carResponseModel';
import{HttpClient} from '@angular/common/http';
import { CarService } from 'src/app/services/car.service';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:CarDetailDto[]=[];
  currentCar:Car;
  dataLoaded=false;
  carResponseModel:ListResponseModel<CarDetailDto>={data:this.cars,
  message:"",
  success:true
}
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params =>{
         if(params["brandId"]){
            this.getCarsByBrandId(params["brandId"])
        }else if(params["colorId"]){

          this.getCarsByColor(params["colorId"])
        }
        else{
           this.getCars()
        }
        //if(params["colorId"]){
        //  this.getCarsByColor(params["colorId"])
//}else{
        // this.getCars()
       // }
      })
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }
  getCarDetails(id:number){
    this.carService.getCarDetails(id).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }
  getCarsByBrandId(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
    
  }
  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
    
  }
  setCurrentBrand(car:Car){
    this.currentCar=car;
  }

}
