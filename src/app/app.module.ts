import { AvatarModule } from "ng2-avatar";
import { AttendanceService } from "./attendance.service";
import "zone.js/dist/zone-mix";
import "reflect-metadata";
import "../polyfills";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule, HttpClient } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

// NG Translate
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { ElectronService } from "./providers/electron.service";

import { WebviewDirective } from "./directives/webview.directive";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";

// AngularFire2
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireModule } from "angularfire2";
import { CONF_LOCAL } from "../environments/environment.local";

// These are some bootstrap3 JS stuff
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ModalModule } from "ngx-bootstrap/modal";
import { AlertModule } from "ngx-bootstrap";

import { TestComponent } from "./components/test/test.component";
import { GroupsComponent } from "./components/groups/groups.component";
import { AttendancesComponent } from "./components/attendances/attendances.component";
import { AttendanceSingleViewComponent } from "./components/attendance-single-view/attendance-single-view.component";
import { AttendancesLecturerViewComponent } from "./components/attendances-lecturer-view/attendances-lecturer-view.component";
import { ListModulesComponent } from "./components/list-modules/list-modules.component";
import { ListGlComponent } from "./components/list-gl/list-gl.component";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    TestComponent,
    GroupsComponent,
    AttendancesComponent,
    AttendanceSingleViewComponent,
    AttendancesLecturerViewComponent,
    ListModulesComponent,
    ListGlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    AngularFireModule.initializeApp(CONF_LOCAL.firebase),
    AngularFirestoreModule.enablePersistence(),
    AvatarModule.forRoot()
  ],
  providers: [ElectronService, AttendanceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
