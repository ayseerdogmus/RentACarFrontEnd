import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/carDetailDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl='https://localhost:44307/api/';

  constructor(private httpClient:HttpClient) { }
  getCars():Observable<ListResponseModel<CarDetailDto>>{
    let newPath=this.apiUrl+"cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarDetails(id:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl+"cars/getdetailsbycarid?carId=" + id;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl+"cars/getcarsbycolorid?id="+colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByBrandId(brandId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl+"cars/getcarsbybrandid?id="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
}
