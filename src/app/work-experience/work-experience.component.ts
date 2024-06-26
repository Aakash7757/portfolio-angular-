import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: '',
      company: '',
      duration: '',
      description: [
       ''
      ],
    },
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
