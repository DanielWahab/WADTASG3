import { Group } from './model/group.model';
import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import {QueryFn} from 'angularfire2/firestore/interfaces';
import {Observable} from 'rxjs/Observable';
import DocumentReference = firebase.firestore.DocumentReference;


@Injectable()
export class AttendanceService {
  readonly path = "groups";

  constructor(private afs: AngularFirestore) {}

  add(data: Group): Promise<DocumentReference> {
    return this.afs
      .collection<Group>(this.path)
      .add({ ...data, created: new Date() });
  }

  remove(id: string): Promise<void> {
    return this.afs.doc<Group>(`${this.path}/${id}`).delete();
  }

  update(id: string, data: Partial<Group>): Promise<void> {
    return this.afs.doc<Group>(`${this.path}/${id}`).update(data);
  }

  getCollection$(ref?: QueryFn): Observable<Group[]> {
    return this.afs
      .collection<Group>(this.path, ref)
      .snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Group;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      });
  }
}
