import {Component, AfterViewInit} from '@angular/core';
import {RenderService} from '../services/render.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(public renderService: RenderService) {}

  ngAfterViewInit(): void {
    this.renderService.init();
  }
}
