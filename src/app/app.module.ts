import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import  { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { CollectiveComponent } from './collective/collective.component';
import { SocialNetworkComponent } from './social-network/social-network.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LinksService } from './links.service';
import { TableContactCellsService} from './table-contact-cells.service';
import { NovakovskaComponent } from './novakovska/novakovska.component';
import { IshchenkoComponent } from './ishchenko/ishchenko.component';
import { DankevichComponent } from './dankevich/dankevich.component';
import { ZakrevskyComponent } from './zakrevsky/zakrevsky.component';
import { SamoylenkoComponent } from './samoylenko/samoylenko.component';
import { StecukComponent } from './stecuk/stecuk.component';
import { BabiyComponent } from './babiy/babiy.component';
import { BoykoComponent } from './boyko/boyko.component';
import { ShevchenkoComponent } from './shevchenko/shevchenko.component';
import { GlushchenkoComponent} from './glushchenko/glushchenko.component';
import { KapelistaComponent } from './kapelista/kapelista.component';
import { SkrypnikComponent } from './skrypnik/skrypnik.component';
import { ChukarinaComponent } from './chukarina/chukarina.component';
import { UdinaComponent } from './udina/udina.component';
import { CollectiveService } from './collective.service';

import {environment} from '../environments/environment';
// import { AngularFirestore } from 'angularfire2/firestore';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'collective', component: CollectiveComponent},
  {path: 'novakovska', component: NovakovskaComponent},
  {path: 'ishchenko', component: IshchenkoComponent},
  {path: 'dankevich', component: DankevichComponent},
  {path: 'zakrevsky', component: ZakrevskyComponent},
  {path: 'samoylenko', component: SamoylenkoComponent},
  {path: 'stecuk', component: StecukComponent},
  {path: 'babiy', component: BabiyComponent},
  {path: 'boyko', component: BoykoComponent},
  {path: 'shevchenko', component: ShevchenkoComponent},
  {path: 'glushchenko', component: GlushchenkoComponent},
  {path: 'kapelista', component: KapelistaComponent},
  {path: 'skrypnik', component: SkrypnikComponent},
  {path: 'chukarina', component: ChukarinaComponent},
  {path: 'udina', component: UdinaComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'social-network', component: SocialNetworkComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    HomeComponent,
    CollectiveComponent,
    SocialNetworkComponent,
    ContactsComponent,
    NovakovskaComponent,
    IshchenkoComponent,
    DankevichComponent,
    ZakrevskyComponent,
    SamoylenkoComponent,
    StecukComponent,
    BabiyComponent,
    BoykoComponent,
    ShevchenkoComponent,
    GlushchenkoComponent,
    KapelistaComponent,
    SkrypnikComponent,
    ChukarinaComponent,
    UdinaComponent
    // AngularFirestore
  ],
  imports: [
    BrowserModule,
    // InfiniteScrollModule,
    RouterModule.forRoot(routes),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [LinksService, TableContactCellsService, CollectiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
