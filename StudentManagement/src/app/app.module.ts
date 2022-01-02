import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentsService } from './service/students.service';
import { CoursesService } from './service/courses.service';
import { SharedService } from './service/shared.service';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {OverlayPanelModule} from 'primeng/overlaypanel';


@NgModule({
  declarations: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
   InputTextModule,
   TableModule,
   DialogModule,
   BrowserAnimationsModule,
   ConfirmDialogModule,
   MessageModule,
   MessagesModule,
   OverlayPanelModule,
   
  
   
    
  ],
  providers: [StudentsService,CoursesService,SharedService, MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

