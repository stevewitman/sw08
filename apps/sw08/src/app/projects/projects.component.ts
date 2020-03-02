import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project, ProjectsService } from '@bb/core-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'bb-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;
  project: Project;
  form: FormGroup;

  constructor(
    private projectsService: ProjectsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getProjects();
    this.initForm()
  }

  save(project) {
    if (project.id) {
      this.update(project);
    } else {
      this.create(project);
    }
  }

  reset() {
    this.form.reset();
    this.project = {} as Project;
    Object.keys(this.form.controls).forEach((key) => {
      this.form.get(key).setErrors(null);
    })
  }

  delete(project: Project) {
    this.projectsService.delete(project)
      .subscribe(() => {
        this.reset();
        this.getProjects();
      })
  }

  select(project: Project) {
    this.project = project;
    this.form.patchValue(project);
  }

  private create(project: Project) {
    this.projectsService.create(project)
      .subscribe(() => {
        this.reset();
        this.getProjects();
      })
  }

  private update(project: Project) {
    this.projectsService.update(project)
      .subscribe(() => {
        this.reset();
        this.getProjects();
      })
  }

  private getProjects() {
    this.projects$ = this.projectsService.all();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      title: ['', Validators.compose([
        Validators.required
      ])],
      details: ['', Validators.compose([
        Validators.required
      ])],
      importanceLevel: [0]
    })
  }
}

