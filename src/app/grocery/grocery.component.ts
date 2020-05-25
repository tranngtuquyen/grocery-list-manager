import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {
  tasks = [];
  task = {name: ''};
  editTaskName: string;
  oldTask;
  doneList = [];
  newTask = "";
  errorMsg = "";
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.newTask === "") {
      this.errorMsg = "Grocery item is invalid";
    } else {
      this.tasks.push({name: this.newTask});
      this.newTask = "";
      this.errorMsg = "";
    }
  }
  getEditName(task) {
    this.editTaskName = task.name;
    this.oldTask = task;
  }
  editItem() {
    let task = this.tasks.filter(data => data.name === this.oldTask.name)[0];
    task.name = this.editTaskName;
  }
  deleteTask(task) {
    let index = this.tasks.findIndex(data => data.name === task.name);
    this.tasks.splice(index,1);
  }

  checkDone(task) {
    let index = this.tasks.findIndex(data => data.name === task.name);
    this.doneList.push({name: task.name});
    this.tasks.splice(index,1);
  }

  clearGroceryList() {
    this.tasks = [];
  }
  clearDoneList() {
    this.doneList = [];
  }
}
