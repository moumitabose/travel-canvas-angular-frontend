import { Component, OnInit } from '@angular/core';
import { TravelCanvasBackendServiceService } from 'src/app/Service/travel-canvas-backend-service.service';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-save-image-sub',
  templateUrl: './save-image-sub.component.html',
  styleUrls: ['./save-image-sub.component.css']
})
export class SaveImageSubComponent implements OnInit {

  file: File | null = null;
  message: string = '';

  constructor(private route: ActivatedRoute,private router: Router,private Svc: TravelCanvasBackendServiceService,) {}

  ngOnInit(): void {
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
      this.message = `Selected file: ${this.file.name}`;
    }
  }

  uploadImage() {
    if (this.file) {
      const formData = new FormData();
      formData.append('file', this.file);
  
      this.Svc.uploadSubImage(formData).subscribe(
        (response) => {
          this.message = 'Image uploaded successfully!';
        },
        (error) => {
          console.error('Error uploading image', error);
          this.message = 'Failed to upload image.';
        }
      );
    } else {
      this.message = 'No file selected!';
    }
  }

}
