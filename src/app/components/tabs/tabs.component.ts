import { Component, OnInit } from '@angular/core';
import tabItems from 'src/app/utils/tabItems';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

   items = tabItems
  constructor() { }

  ngOnInit() {}

}
