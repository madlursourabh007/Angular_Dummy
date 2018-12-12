import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurvaluesComponent } from 'src/app/enduser/pages/ourvalues/ourvalues.component';
import { ProcesspageComponent } from 'src/app/enduser/pages/processpage/processpage.component';
import { ContactusComponent } from 'src/app/enduser/pages/contactus/contactus.component';
import { HomeComponent } from 'src/app/enduser/pages/home/home.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    children : [
      {
        path : 'Our_values',
        loadChildren : '../ourvalues/ourvalues.module#OurvaluesModule'
      },
      {
        path : 'Process_page',
        loadChildren : '../processpage/processpage.module#ProcesspageModule'
      },
      {
        path : 'Contact_us',
        loadChildren : '../contactus/contactus.module#ContactusModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
