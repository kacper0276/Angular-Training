import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-naukainterakcji',
  templateUrl: './interakcjaKomponentow.component.html',
})
export class InterakcjaKomponentow implements OnInit {
  user: { id: string };
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
    };
    this.route.params.subscribe((data) => {
      this.user = {
        id: data['id'],
      };

      console.log(this.user);
    });

    console.log(this.user);
  }


  tasks = ['Tak', 'Nie', 'Cos'];

  selected(task: string): void {
    console.log(task);
  }
}
