import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Dr. CV Raman University Chhattisgarh",
      course: 'BCA',
      duration: '2021-2024',
      score: '7.5 CGPA',
    },
    {
      institute: 'Shri GPM junior collage',
      course: 'HSC',
      duration: '2019-2021',
      score: '75%',
    },
    {
      institute: 'Gyan vikas hindi school',
      course: 'SSC',
      duration: '2009-2019',
      score: '85%',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
