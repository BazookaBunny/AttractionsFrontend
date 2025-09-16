import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Attraction, Category } from '../models/attraction.model';


@Injectable({ providedIn: 'root' })
export class AttractionsService {
  constructor(private api: ApiService) { }

  listByCategory(category: Category): Observable<Attraction[]> {
    return this.api.get<Attraction[]>(`/attractions/bycategory/?category=${encodeURIComponent(category!)}`);
  };

  get(id: number): Observable<Attraction> {
    return this.api.get<Attraction>(`/attractions/${id}`);
  }

  create(model: Partial<Attraction>): Observable<Attraction> {
    return this.api.post<Attraction>('/attractions', model);
  }

  update(id: number, payload: Partial<Attraction>): Observable<Attraction> {
    return this.api.put<Attraction>(`/attractions/${id}`, payload);
  }

  remove(id: number) {
    return this.api.delete<void>(`/attractions/${id}`);
  }

}
