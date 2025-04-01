import { Injectable } from "@angular/core";

import { Observable, ReplaySubject, BehaviorSubject } from "rxjs";

import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { distinctUntilChanged } from "rxjs/operators";

import { ApiService } from "./api.service";
import { StorageService } from "./storage.service";
import { UtilityService } from "../utility.service";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class IdentityService {
  private urlSegement = {
    generateToken: "/token",
    getIdentity: "/identity/authenticated",
    sendMailPass: "/Helper/SendMailPass",
  };

  private currentUserSubject = new BehaviorSubject<any>({});
  public currentUser = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  private dvcsSubject = new BehaviorSubject<any>([]);
  public listDVCS = this.dvcsSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  private currentMaDvCsSubject = new BehaviorSubject<string>("");
  public currentMaDvCs = this.currentMaDvCsSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(0);
  public isAuthenticated = this.isAuthenticatedSubject
    .asObservable()
    .pipe(distinctUntilChanged());

    private softwareSubject = new BehaviorSubject<any>([]);
    private currentSoftwareSubject = new BehaviorSubject<string>("");
    public currentSoftware = this.currentSoftwareSubject
      .asObservable()
      .pipe(distinctUntilChanged());

  constructor(
    private apiService: ApiService,
    private storageService: StorageService,
    private utilityService: UtilityService,
    private http: HttpClient
  ) { }

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  async populate() {
    // If JWT detected, attempt to get & store user's info
    const token = await this.storageService.get(environment.token.key);
    if (token) {
      try {
        const res = await this.apiService.get(this.urlSegement.getIdentity);
        if (!res.member_info || !res.ma_data) this.purgeAuth();
        else {
          const members = JSON.parse(res.member_info);
          const dvcs = JSON.parse(res.dvcs_allow);          
          this.setDvCs(res.ma_data);
          this.setAuth(members[0], dvcs);
          this.setSoftware(members[0].Software_ID_Default);
        }
      } catch (err) {
        this.purgeAuth();
      }
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  setAuth(user: any, dvcs: any) {
    // Save JWT sent from server in localstorage
    // this.storageService.setToken(user.token);
    // Set current user data into observable
    this.currentUserSubject.next(user);
    this.dvcsSubject.next(dvcs);
    //this.currentUser = user;
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  setDvCs(strMaDvCs: string) {
    this.storageService.set(environment.storage.dataCode, strMaDvCs);
    this.currentMaDvCsSubject.next(strMaDvCs);
  }

  setSoftware(software_Id: string) {
    this.storageService.set(environment.storage.softwareId, software_Id);
    this.currentSoftwareSubject.next(software_Id);
  }

  purgeAuth() {
    
    // Remove JWT from localstorage
    this.storageService.remove(environment.token.key);
    this.storageService.remove(environment.storage.dataCode);
    this.storageService.remove(environment.storage.softwareId);
    // Set current user to an empty object
    this.currentUserSubject.next(null);
    this.dvcsSubject.next([]);
    this.softwareSubject.next([]);
    this.currentMaDvCsSubject.next("");
    this.currentSoftwareSubject.next("");
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  async attemptAuth(username: string, password: string) {
    try {
      const res = await this.getToken(username, password);
      this.storageService.set(environment.token.key, res.access_token);
      const members = JSON.parse(res.member_info);
      const dvcs = JSON.parse(res.dvcs_allow);      
      this.setDvCs(res.ma_data);
      this.setSoftware(res.ma_software_default);
      this.setAuth(members[0], dvcs);
      return res;
    } catch (err) {
      this.purgeAuth();
      return Promise.reject(err);
    }
  }

  async getToken(username: string, password: string): Promise<any> {
    try {
      debugger
      const data = `grant_type=password&username=${username}&password=${password}`;
      const url = `${environment.baseUrl}${this.urlSegement.generateToken}`;
      return await this.http.post(url, data).toPromise();
    } catch (error) {
      console.error(error);
      const err: HttpErrorResponse = error;
      switch (err.status) {
        case 0:
          this.utilityService.showToast(
            "Kết nối hệ thống thất bại.",
            this.utilityService.toastType.error
          );
          break;
        case 400:
          if (err.error && err.error.error_description) {
            this.utilityService.showToast(
              err.error.error_description,
              this.utilityService.toastType.error
            );
          } else
            this.utilityService.showToast(
              err.message,
              this.utilityService.toastType.error
            );
          break;
        default:
          this.utilityService.showToast(
            err.message,
            this.utilityService.toastType.error
          );
          break;
      }
      return Promise.reject(err);
    }
  }

  async sendMailPass(userName: string, email: string): Promise<any> {
    const params = {
      userName: userName,
      email: email
    };
    const url = `${environment.baseUrl}${this.urlSegement.sendMailPass}`;
    const res = await this.http.post(url, params).toPromise();

    return res;
  }

  getCurrentUser(): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      this.currentUser.subscribe(
        (user) => {
          return resolve(user);
        },
        (err) => {
          console.error(JSON.stringify(err));
          return reject(err);
        }
      );
    });
    return promise;
  }

  getCurrentMaDvCsAsync(): Promise<string> {
    const promise = new Promise<string>((resolve, reject) => {
      this.currentMaDvCs.subscribe(
        (str) => {
          return resolve(str);
        },
        (err) => {
          console.error(JSON.stringify(err));
          return reject(err);
        }
      );
    });
    return promise;
  }

  public getStrCurrentMaDvCs() {
    let ma_DvCs = "A03";
    this.currentMaDvCs.subscribe((res) => {
      ma_DvCs = res;
    });
    return ma_DvCs;
  }

  public getStrMemberId(): Promise<string> {
    const promise = new Promise<string>((resolve, reject) => {
      this.currentUser.subscribe(
        (res) => {
          return resolve(res.member_ID);
        },
        (err) => {
          console.error(JSON.stringify(err));
          return reject(err);
        }
      );
    });
    return promise;
  }
}
