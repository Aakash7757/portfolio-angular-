import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Aakash gupta'],
    ['DOB', '10/05/2004'],
    ['Work Exp', 'frasher'],
    ['Education', 'BCA'],
    ['Interests', 'Coding'],
  ];

  aboutMe: string[] = [
    'Hi, I am a frasher Software Engineer.',
    'Worked as Head to achive my BCA degree.',
  ];

  constructor() {}

  ngOnInit(): void {}
}
