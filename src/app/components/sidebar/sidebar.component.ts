import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { Sidebar } from 'src/app/interfaces/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  toggle: boolean = false;
  active: boolean = false;

  sidebar: Sidebar[] = []

  toggleActive() {
    this.active = !this.active;
  }

  sidebarToggle() {
    this.toggle = !this.toggle;
  }

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.getSidebar()
  }

  getSidebar() {
    this.sidebarService.getSidebar().subscribe(data => {
      this.sidebar = data
    })
  }

}
