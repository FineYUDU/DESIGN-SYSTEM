import { Injectable } from '@angular/core';
import { Data } from '../models/dataLocalResp.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // alias_username:string;
  // role:string;
  // circle_profile:string;
  // company:string;

  constructor() { 
    // // EXTRACT DATA
    // const data = localStorage.getItem('data')
    // const userData:Data = JSON.parse(data);    
    // // EXTRACT WORDS
    // const word1 = userData.data_company.alias_username[0];
    // const word2 = userData.data_company.alias_username[1];
    // // EXTRACT DATA COMPANY
    // const company_name = userData.data_company.company_name;
    // // CIRCLE PROFILE
    // this.circle_profile = word1 + word2;
    // // COMPANY NAME
    // this.company = company_name;
    // // EXTRACT USERNAME
    // this.alias_username = userData.data_company.alias_username;
    // this.role = userData.data_company.user_type;

    // console.log(userData);
    // console.log(this.alias_username);
    // console.log(this.company);
  }
}
