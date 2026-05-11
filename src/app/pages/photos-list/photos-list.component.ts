import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Photo } from '../../models/photo.interface';
import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-photos-list',
  imports: [RouterLink],
  templateUrl: './photos-list.component.html',
  styleUrl: './photos-list.component.scss',
})
export class PhotosListComponent {
  // Array de fotos, inicialmente vacío. Se utiliza signal para que Angular pueda detectar cambios y actualizar la vista automáticamente.
  photos = signal<Photo[]>([]);

  constructor(private photosService: PhotosService) {}

  ngOnInit() {
    this.photosService.getPhotos().subscribe((res) => {
      (console.log(res),
        // Actualiza el signal con las primeras 20 fotos obtenidas del servicio. Esto hará que la vista se actualice automáticamente para mostrar estas fotos.
        this.photos.set(res.slice(0, 20)));
    });
  }
}
