import { Component, OnInit } from '@angular/core';
import { projectDetails } from '../../../assets/projectData/projects'
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public projects = projectDetails;

  constructor() { }

  ngOnInit(): void {

  }

}
