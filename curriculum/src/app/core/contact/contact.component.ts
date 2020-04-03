import { Component, OnInit } from '@angular/core';
import { RouteService } from '../Services/route.service';
import { HeaderService } from '../Services/header.service';

@Component({
  selector: 'cod-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private routeService: RouteService,
              private headerService:HeaderService) {
                this.headerService.setContent('Contact');
              }

  ngOnInit(): void {
  }
  redirect(goal: string){
    this.routeService.redirect(goal);

  }

}
