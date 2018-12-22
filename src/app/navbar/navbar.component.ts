import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  motCleSearch='';

  constructor(private router: Router) { }
  
  ngOnInit() {
  }
  handleSearch()
  {
    this.router.navigate(['/search',this.motCleSearch]);
  }

}
