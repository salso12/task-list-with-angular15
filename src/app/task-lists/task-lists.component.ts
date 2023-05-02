import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.css']
})
export class TaskListsComponent {
  tasks = [
    { description: 'Go shopping', done: false },
    { description: 'go to the gym', done: false },
    { description: 'Read a book', done: false },
    { description: 'Visit the doctor', done: false },
  ];

  task = { description: '', done: false }
  checkedTasks: { description: string, done: boolean }[] = [];
  addTask(){
    if(this.task.description){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your task has been added',
        showConfirmButton: false,
        timer: 1500
      })
      this.tasks=[this.task,...this.tasks]
      this.task={description:'',done: false}
    }else{
      Swal.fire(
        ' Are you sure?',
        'the field is empty',
        'question'
      )
    }


  }
  updateCheckedTasks(task: any) {
    const index = this.tasks.findIndex(t => t.description === task.description);
    this.tasks[index].done = task.done;

    if (task.done) {
      this.checkedTasks.push(task);
    } else {
      const checkedIndex = this.checkedTasks.findIndex(t => t.description === task.description);
      this.checkedTasks.splice(checkedIndex, 1);
    }
  }



}
