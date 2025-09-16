import { Component, inject } from '@angular/core';
import { Attraction } from '../models/attraction.model';
import { AttractionsService } from '../services/attractions.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class Add {

  private attractionsService = inject(AttractionsService);

  //form builder
  private fb = inject(FormBuilder);
  //for navigating
  private router = inject(Router);

  loading = false;
  error = '';

  dynamicForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    address: ['', [Validators.required]],
    category: ['', [Validators.required]],
    latitude: ['', [Validators.required]],
    longitude: ['', [Validators.required]],
  });


  submitForm(): void {

    const formValue = this.dynamicForm.value;
    const model: Attraction = {
      name: formValue.name,
      address: formValue.address,
      category: formValue.category,
      imageUrl: formValue.image,
      latitude: parseFloat(formValue.latitude),
      longitude: parseFloat(formValue.longitude)
    };

    //
    this.loading = true;
    this.attractionsService.create(model).subscribe({
      next: (value) => {
        this.error = '';
        this.dynamicForm.reset();
        this.router.navigate(['/dashboard']);
      },

      error: () => {
        this.error = "Failed to create attraction";
      },

      complete: () => this.loading = false
    });

  }
}
