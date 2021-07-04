import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Post {
  id?: string;
  imie: string;
  nazwisko: string;
  opis: string;
  umiejetnosci: string;
  wiek: number;
  zdjecie: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  postsCollection?: AngularFirestoreCollection<Post>;
  posts?: Observable<Post[]>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.postsCollection = this.afs.collection('ludzie');
    this.posts = this.postsCollection.valueChanges()
  }
  title = 'antybohaterowie';
}
