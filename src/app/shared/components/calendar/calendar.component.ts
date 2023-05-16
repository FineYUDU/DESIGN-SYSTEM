import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  // BTN CALENDAR
  showCalendar:boolean = false;

  // TODAY
  public currentDate: Date;
  // DAYS OF WEEK
  daysWeek:string[] =['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday'];
  // MONTH AND YEAR
  public currentMonth: string;
  public currentYear: number;
  public firstDay:number;
  // SELECT DAY
  public selectedDay:Date;
  // RANGE OF DAYS
  public startDate: Date;
  public endDate: Date;
  //DAYS ARRAY
  public get daysInMonth(): Date[] {
    const days: Date[] = [];
    const daysInMonth: number = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
  
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), i);
      days.push(date);
    }
    return days;
  }
  
  // SELECT DAY
  selectDay(date: Date) {
    this.selectedDay = date;
    console.log(this.selectedDay);
  }


  constructor() {
    // START IN CURRENT DATE
    this.currentDate = new Date();
    // SET INITIAL MONTH AND YEAR
    this.currentMonth = this.currentDate.toLocaleString('es-MX', { month: 'short' });
    // YEAR
    this.currentYear = this.currentDate.getFullYear();
    // GET FIRST DAY OF MONTH
    this.firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth()).getDay();
    // SE INICIALIZA SELECT DAY
    this.selectedDay = this.currentDate;
    this.startDate = this.currentDate;
    this.endDate = this.currentDate;

  }

  // ADD A MONTH IN CURRENT DATE
  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1); 
    this.currentMonth = this.currentDate.toLocaleString('es-MX', { month: 'short' });
    this.currentYear = this.currentDate.getFullYear();
    this.firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth()).getDay();
    console.log(this.currentDate);
  }

  // SUBTRACT ONE MONTH FROM THE CURRENT DATE
  prevMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1); 
    this.currentMonth = this.currentDate.toLocaleString('es-MX', { month: 'short' });
    this.currentYear = this.currentDate.getFullYear();
    this.firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth()).getDay();
    console.log(this.currentDate);
  }

  // SET SELECTED DAY
  setSelectedDay(day: number): void {
    this.selectedDay = new Date(this.currentYear, this.currentDate.getMonth(), day);
    console.log(this.selectedDay);
    
  }
}
