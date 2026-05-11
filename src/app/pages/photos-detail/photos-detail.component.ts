import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Photo } from '../../models/photo.interface';
import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-photos-detail',
  imports: [RouterLink],
  templateUrl: './photos-detail.component.html',
  styleUrl: './photos-detail.component.scss',
})
export class PhotosDetailComponent {
  photoDetail = signal<Photo>({
    copyright: '',
    date: '',
    explanation: '',
    hdurl: '',
    media_type: '',
    service_version: '',
    title: '',
    url: '',
  });

  constructor(
    private photosService: PhotosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier -->', identifier);

    if (identifier) {
      this.photosService.getPhotoById(identifier).subscribe((img) => {
        if (!img) {
          this.router.navigateByUrl('/');
        }

        this.photoDetail.set(img);
        console.log('photoDetail -->', this.photoDetail());
      });
    }
  }
}
