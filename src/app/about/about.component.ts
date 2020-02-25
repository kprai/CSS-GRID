import { Component, ViewEncapsulation , OnInit}
 from '@angular/core';

@Component({
  selector: 'about-root',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


