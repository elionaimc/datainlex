import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileExplorerModule } from './archives/file-explorer.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FileService } from './services/file.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SimplePdfViewerModule } from 'simple-pdf-viewer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './core/material/material.module';
import { UsersComponent } from './core/users/users.component';
import { LoginComponent } from './core/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    SimplePdfViewerModule,
    FormsModule,
    AppRoutingModule,
    FileExplorerModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
