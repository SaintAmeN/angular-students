import {Injectable} from '@angular/core';
import {StudentModel} from "../model/StudentModel";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentList: StudentModel[] = []

  constructor() {
    // push ==> add()
    // this.studentList.push({
    //   id: 1,
    //   imie: 'pawel',
    //   nazwisko: 'gawel',
    //   dataUrodzenia: '2022-01-01'
    // })
  }

  // nazwa metody   => dodajStudenta
  // nowyStudent    => nazwa parametru
  // :StudentModel  => typ parametru
  // :void          => typ zwracany funkcji
  dodajStudenta(nowyStudent: StudentModel): void {
    this.studentList.push(nowyStudent)
  }
}
