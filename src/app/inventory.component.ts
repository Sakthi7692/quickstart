import { Component } from '@angular/core';

@Component ({
   selector: 'my-app',
   templateUrl: './inventory.component.html',
})
export   class   Inventory  {
    appStatus: boolean = true; 
    appTitle: string = 'Angular - Sakthi';
    appList: any[] = [ {
      "ID": "1",
      "Name" : "One"
   },
  
   {
      "ID": "2",
      "Name" : "Two"
   } ];
  
}