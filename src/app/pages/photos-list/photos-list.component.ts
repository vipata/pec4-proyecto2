import { Component, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { Photo } from '../../models/photo.interface';
import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-photos-list',
  imports: [
    RouterLink,
    MatListModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './photos-list.component.html',
  styleUrl: './photos-list.component.scss',
})
export class PhotosListComponent {
  // Array de fotos, inicialmente vacío. Se utiliza signal para que Angular pueda detectar cambios y actualizar la vista automáticamente.
  photos = signal<Photo[]>([]);

  // Variable para controlar el modo de vista (lista o tarjetas), inicialmente establecida en 'list'. Al ser un signal la vista se actualizará automáticamente.
  viewMode = signal<'list' | 'cards'>('list');

  constructor(private photosService: PhotosService) {}

  ngOnInit() {
    this.photosService.getPhotos().subscribe((res) => {
      (console.log(res),
        // Actualiza el signal con las primeras 20 fotos obtenidas del servicio. Esto hará que la vista se actualice automáticamente para mostrar estas fotos.
        this.photos.set(res.slice(0, 20)));
    });
  }
}
