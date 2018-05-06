import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Modules } from '../../model/module.model';
import { AttendanceService } from '../../attendance.service';

@Component({
  selector: 'app-list-modules',
  templateUrl: './list-modules.component.html',
  styleUrls: ['./list-modules.component.scss']
})
export class ListModulesComponent implements OnInit {

  modules$: Observable<Modules[]>;

  readonly path = 'modules';

  constructor(private groupService: AttendanceService) { }

  ngOnInit() {
    this.modules$ = this.groupService.getCollection$(
      this.path,
      ref => ref.orderBy("name", "asc")
    );
  }

}
