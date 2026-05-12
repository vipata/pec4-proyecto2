import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [MatCardModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() appRoute: string = '';
  @Input() imgDate: string = '';
  @Input() imgIndex: number = 0;
  @Input() imgTitle: string = '';
  @Input() imgUrl: string = '';
}
