import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export const labels = {
  HomePageHeading : 'Welcom to One Place for Agriculture Marketing'
};
