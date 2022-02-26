import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  selectedCourse = null;

  selectCourse(course) {
    this.selectedCourse = course;
  }

  deleteCourse(course) {
    console.log(`Deleted Course: ${course.id}`);
  }

  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'Javascript the hard way',
      description: 'Learn Javascript the hard way by doing exercise.',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 3,
      title: 'Some Title',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
