import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  // TODAY
  public currentDate: Date;
  // DAYS OF WEEK
  daysWeek:string[] =['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday'];
  // FIRST DAY OF WEEK IN MONTH
  public firstDayOfWeek: number;
  // MONTH AND YEAR
  public currentMonth: string;
  public currentYear: number;
  public firstDay:number;
  // SELECT DAY
  public selectedDay:Date = new Date;

  //DAYS IN MONTH
  public get daysInMonth(): Date[] {
    const days: Date[] = [];
    const daysInMonth: number = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
  
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), i);
      days.push(date);
    }
  
    return days;
  }
  


  constructor() {
    // START IN CURRENT DATE
    this.currentDate = new Date();
     // SET INITIAL MONTH AND YEAR
     this.currentMonth = this.currentDate.toLocaleString('es-MX', { month: 'long' });
     this.currentYear = this.currentDate.getFullYear();
     this.firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth()).getDay();
      // GET DAY OF THE WEEK FOR THE FIRST DAY OF THE MONTH
      const firstDayOfMonth: Date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
      this.firstDayOfWeek = firstDayOfMonth.getDay();

     console.log(this.firstDayOfWeek);
  }

  // ADD A MONTH IN CURRENT DATE
  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1); 
    this.currentMonth = this.currentDate.toLocaleString('en-US', { month: 'long' });
    this.currentYear = this.currentDate.getFullYear();
    console.log(this.currentDate);
  }

  // SUBTRACT ONE MONTH FROM THE CURRENT DATE
  prevMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1); 
    this.currentMonth = this.currentDate.toLocaleString('en-US', { month: 'long' });
    this.currentYear = this.currentDate.getFullYear();
    console.log(this.currentDate);
  }

  // SET SELECTED DAY
  setSelectedDay(day: number): void {
    this.selectedDay = new Date(this.currentYear, this.currentDate.getMonth(), day);
    console.log(this.selectedDay);
    
  }
}
