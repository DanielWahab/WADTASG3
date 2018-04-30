import { ListGlComponent } from './components/list-gl/list-gl.component';
import { ListModulesComponent } from './components/list-modules/list-modules.component';
import { AttendancesLecturerViewComponent } from './components/attendances-lecturer-view/attendances-lecturer-view.component';
import { AttendanceSingleViewComponent } from './components/attendance-single-view/attendance-single-view.component';
import { AttendancesComponent } from './components/attendances/attendances.component';
import { GroupsComponent } from './components/groups/groups.component';
import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './components/home/home.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  { path: "test", component: TestComponent },
  { path: "groups", component: GroupsComponent },
  { path: "attendances", component: AttendancesComponent },
  { path: "attendances/:id", component: AttendanceSingleViewComponent },
  { path: "attendancesLecturerView", component: AttendancesLecturerViewComponent },
  { path: "modules", component: ListModulesComponent },
  { path: "gl", component: ListGlComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
