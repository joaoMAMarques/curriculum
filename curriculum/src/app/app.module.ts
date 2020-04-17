import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PortofolioComponent} from './cod/portofolio/portofolio.component';
import {MatCardModule} from '@angular/material/card';
import {MaterialSharedModule} from './shared/modules/material-shared.module';
import {NgxBootstrapSharedModule} from './shared/modules/ngx-bootstrap-shared.module';
import {PrimeNgSharedModule} from './shared/modules/prime-ng-shared.module';
import {MenuComponent} from './core/menu/menu.component';
import {CollapseModule} from 'ngx-bootstrap';
import {HeaderComponent} from './core/header/header.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {CreateAccountComponent} from './cod/create-account/create-account.component';
import {LogInAccountComponent} from './cod/log-in-account/log-in-account.component';
import {ContactComponent} from './cod/contact/contact.component';
import {ContactDetailsComponent} from './cod/contact/contact-details/contact-details.component';
import {ContactSupportComponent} from './cod/contact/contact-support/contact-support.component';
import {AgGridModule} from 'ag-grid-angular';
import {AgChartsAngularModule} from 'ag-charts-angular';
import {TechnologiesComponent} from './cod/technologies/technologies.component';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {HttpClientModule} from '@angular/common/http';
import {NumberCommaPipe} from './shared/pipes/number-comma.pipe';
import {FooterComponent} from './core/footer/footer.component';
import {ContactTechnologiesComponent} from './cod/contact/contact-technologies/contact-technologies.component';
import {FaqPageComponent} from './cod/faq-page/faq-page.component';
import {SortByFildPipe} from './shared/pipes/sort-by-field.pipe';
import {HomepageComponent} from './core/homepage/homepage.component';
import {StaticsComponent} from './cod/contact/contact-technologies/statics/statics.component';
import {ProfileCreatorComponent} from './cod/profile-creator/profile-creator.component';
import { ProfileDetailsComponent } from './cod/profile-creator/profile-details/profile-details.component';
import { SoftSkillsComponent } from './cod/profile-creator/soft-skills/soft-skills.component';
import { TechnicalSkillsComponent } from './cod/profile-creator/technical-skills/technical-skills.component';
import { ProjectsComponent } from './cod/profile-creator/projects/projects.component';
import { AdicionalInfoComponent } from './cod/profile-creator/adicional-info/adicional-info.component';
import { ConclusionComponent } from './cod/profile-creator/conclusion/conclusion.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  }

];

@NgModule({
  declarations: [
    AppComponent,
    PortofolioComponent,
    MenuComponent,
    HeaderComponent,
    PageNotFoundComponent,
    CreateAccountComponent,
    LogInAccountComponent,
    ContactComponent,
    ContactDetailsComponent,
    ContactSupportComponent,
    FooterComponent,
    TechnologiesComponent,
    NumberCommaPipe,
    ContactTechnologiesComponent,
    FaqPageComponent,
    SortByFildPipe,
    HomepageComponent,
    StaticsComponent,
    ProfileCreatorComponent,
    ProfileDetailsComponent,
    SoftSkillsComponent,
    TechnicalSkillsComponent,
    ProjectsComponent,
    AdicionalInfoComponent,
    ConclusionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MaterialSharedModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}), // teoricamente isto eh para debbuggin but idk
    NgxBootstrapSharedModule,
    PrimeNgSharedModule,
    CollapseModule,
    AgGridModule.withComponents([]),
    AgChartsAngularModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    HttpClientModule
  ],
  providers: [NumberCommaPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
