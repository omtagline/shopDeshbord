import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-conatiner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-conatiner.component.html',
  styleUrl: './home-conatiner.component.scss',
})
export class HomeConatinerComponent {
  @Input() homedata: any = '';
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('this.homedata :>> ', this.homedata);
  }
}
