import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { Photo } from '../../../models/photo.interface';

@Component({
  selector: 'app-list',
  imports: [RouterLink, MatListModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() photos: Photo[] = [];
  @Input() appRoute: string = '';
}
