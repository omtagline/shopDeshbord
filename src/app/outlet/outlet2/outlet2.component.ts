import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-outlet2',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './outlet2.component.html',
  styleUrl: './outlet2.component.scss',
})
export class Outlet2Component {}
