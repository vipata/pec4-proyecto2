import { Routes } from '@angular/router';
import { PhotosDetailComponent } from './pages/photos-detail/photos-detail.component';
import { PhotosListComponent } from './pages/photos-list/photos-list.component';

export const routes: Routes = [
  // La route por defecto redirige a la lista de fotos
  { path: '', redirectTo: 'photos', pathMatch: 'full' },
  { path: 'photos', component: PhotosListComponent },
  { path: 'photos/:id', component: PhotosDetailComponent },
];
