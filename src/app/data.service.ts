import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl='http://localhost:3001/enrollments'

  constructor(private http:HttpClient) { }

  addData(enrollmentData:any):Observable<any>{
    return this.http.post(this.apiUrl,enrollmentData)
  }
}
