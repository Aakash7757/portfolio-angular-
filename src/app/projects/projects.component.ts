import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Train ticket booking website',
      technologies: 'technology - HTML, CSS, JAVASCRIPT, PHP, MYSQL',
      description: [
       " created a website using PHP and web technology in which user can book train tickets.",
      "my main role was DBA working with Database Design and",
      "Schema Creation.",
      "Database Design and Schema Creation:",
      "Optimized database queries to improve performance and reduce",
      "response times for user requests."
      ],
    },
    {
      title: 'ace expression recognition system ',
      technologies: 'PYTHON, KERAS, JUPYTER NOTEBOOK',
      description: [
        'used CNN algorithm to created program that can recognition face expression',
        'trained machine with label data, more then 10,000 images',
        'can recognize 7 different type faces',
      ],
    },
    {
      title: 'university management system',
      technologies: ' java. swing, MySQL, JDBC',
      description: [
        'created a java desktop application in which admin can intract with school database, students can pay fee and check of attendance.',
        'my role was all the DBA working with JDBC and coding for all CURD operations in programe',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
