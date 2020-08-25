import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { TabelaComponent } from './tabela/tabela.component';

@NgModule({
  declarations: [AppComponent, TabelaComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
