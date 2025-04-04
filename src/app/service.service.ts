import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const baseUrl = `${environment.baseUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }


  login(data: any): Observable<any> {

    return this.http.post(baseUrl + 'auth/login', data);
  }
  edituser(user_id: any, data: any): Observable<any> {

    return this.http.put(baseUrl + 'users/' + user_id, data);
  }

  createservice(data: any): Observable<any> {

    return this.http.post(baseUrl + 'service', data);
  }



  user_by_id(user_id: any): Observable<any> {

    return this.http.get(baseUrl + 'user_by_id/' + user_id);
  }

  verify_email(user_id: any): Observable<any> {

    return this.http.get(baseUrl + 'users/verify_email/' + user_id);
  }


  get_services_by_user(user_id: any): Observable<any> {

    return this.http.get(baseUrl + 'get_services_by_user/' + user_id);
  }



  create(data: any): Observable<any> {
    return this.http.post(baseUrl + 'auth/signup', data);
  }
  getallinformations() {
    return this.http.get(baseUrl + 'services');
  }
  excursion() {
    return this.http.get(baseUrl + 'Informations/excursion');
  }
  hotels() {
    return this.http.get(baseUrl + 'Informations/hotel');
  }
  get_hotles(user_id: any, data: any) {
    return this.http.post(baseUrl + 'scraping4/' + user_id, data);
  }

  filter_excursion(user_id: any, data: any) {
    return this.http.post(baseUrl + 'filter_excursion/' + user_id, data);
  }
  demande_reshebergement(user_id: any, data: any) {
    return this.http.post(baseUrl + 'demande_reshebergement/' + user_id, data);
  }
  demande_resexcursion(user_id: any, data: any) {
    return this.http.post(baseUrl + 'demande_resexcursion/' + user_id, data);
  }
  add_avis(user_id: any, data: any) {
    return this.http.post(baseUrl + 'avis/' + user_id, data);
  }
  avis() {
    return this.http.get(baseUrl + 'avis');
  }
  demande_res(user_id: any) {
    return this.http.get(baseUrl + 'demande_res/' + user_id);
  }
  deleteavis(avis_id: any) {
    return this.http.delete(baseUrl + 'avis/' + avis_id);
  }

  delete_demande(dem_id: any) {
    return this.http.delete(baseUrl + 'delete_demande/' + dem_id);
  }

  getdemande(dem_id: any) {
    return this.http.get(baseUrl + 'getdemande/' + dem_id);
  }


  get_users() {

    return this.http.get(baseUrl + 'users');
  }
  demande_res_encours() {

    return this.http.get(baseUrl + 'demande_res_encours');
  }
  demande_res_effectuer() {

    return this.http.get(baseUrl + 'demande_res_effectuer');
  }
  putdemande_resexcursion(dem_id: any, data: any) {

    return this.http.put(baseUrl + 'demande_resexcursion/' + dem_id, data);
  }


  putdemande_reshebergement(dem_id: any) {

    return this.http.get(baseUrl + 'demande_reshebergement/' + dem_id);
  }

  getalldemandes() {
    return this.http.get(baseUrl + 'getalldemandes');

  }
  getagences() {
    return this.http.get(baseUrl + 'getagences');

  }
}