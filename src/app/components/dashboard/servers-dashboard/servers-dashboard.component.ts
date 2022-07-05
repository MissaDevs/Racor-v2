import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers-dashboard',
  templateUrl: './servers-dashboard.component.html',
  styleUrls: ['./servers-dashboard.component.css']
})
export class ServersDashboardComponent implements OnInit {

  public id: string = "";
  public sb: string = "";

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getId()
  }

  getId () {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id']
      if (id) this.id = id

      const sb = params['sb']
      if (sb) this.sb = sb
    })
  }

}
