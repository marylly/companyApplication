import { Employee }         from './../Employee';
import { NgModule } 		from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { RouterModule }     from '@angular/router';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';
//import component
import { AppComponent } 	from '../component/app.component';
import { ListComponent } 	from '../component/list.component';
import { FormComponent } 	from '../component/form.component';
import { EmployeeService } from '../service/employee.service';

@NgModule({
	imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            {path: '', redirectTo: '/list', pathMatch: 'full'},
            {path: 'list', component: ListComponent},
            {path: 'form/:act', component: FormComponent},
            {path: 'form/:act/:id', component: FormComponent}
        ])
    ],
	declarations: [
	    AppComponent,
        FormComponent,
        ListComponent
    ],
	bootstrap: [ AppComponent ],
    providers: [ EmployeeService ]
})

export class AppModule { }
