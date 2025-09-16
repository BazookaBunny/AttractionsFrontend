import { AfterViewInit, Component, inject } from '@angular/core';
import * as L from 'leaflet';
import { Attraction, Category } from '../models/attraction.model';
import { AttractionsService } from '../services/attractions.service';
import { FormsModule } from '@angular/forms';
import { TOP_ATTRACTIONS, TopAttraction } from '../models/topAttraction.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class Dashboard implements AfterViewInit {

  private map!: L.Map;
  private attractionsService = inject(AttractionsService);

  selectedCategory: Category = 'museums';
  top: String = '';
  loading = false;
  error = '';

  private markersLayer = L.featureGroup();  // holds all attraction markers

  sidebarOpen = false;       // closed by default on small screens
  searchQuery = '';          // optional: wire into your filtering later

  topAttractions: TopAttraction[] = TOP_ATTRACTIONS;



  ngAfterViewInit(): void {
    // Inițializează harta
    this.map = L.map('map').setView([44.436, 26.103], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    // add markers layer on top
    this.markersLayer.addTo(this.map);

    //start with museums
    this.selectCategory(this.selectedCategory);

  }

  selectCategory(category: Category) {
    this.error = '';
    this.selectedCategory = category;
    this.loading = true;

    this.attractionsService.listByCategory(category).subscribe({
      next: attractions => {
        this.applyAttractions(attractions);
      },
      error: () => this.error = "Failed to load attractions.",
      complete: () => this.loading = false
    });

  }

  private applyAttractions(items: Attraction[]) {

    //delete old markers on map
    this.markersLayer.clearLayers();

    items.forEach(a => {
      const marker = L.marker([a.latitude, a.longitude]).bindPopup(
        `
        <strong>${a.name}</strong>
        <br>
        <img src="${a.imageUrl}" alt="${a.name}" style="width:100%; height:auto; max-width:300px; margin-bottom:8px;">
        <br>
        ${a.address || ''}
        `
      );

      this.markersLayer.addLayer(marker);
    });

    // auto-fit map to markers if any
    if (items.length > 0) {
      const bounds = this.markersLayer.getBounds();
      if (bounds.isValid()) {
        this.map.fitBounds(bounds.pad(0.2));
      }
    }

  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  onMap(a: TopAttraction) {
    //delete old markers on map
    this.markersLayer.clearLayers();

    const marker = L.marker([a.latitude, a.longitude]).bindPopup(
      `
        <strong>${a.name}</strong>
        <br>
        <img src="${a.image}" alt="${a.name}" style="width:100%;height:auto;max-width:300px;margin-bottom:8px;">
        <br>
        ${a.address || ''}
        <br>
        ${a.description || ''}
        <br>
        Schedule: ${a.schedule || ''}
        <br>
        Avg time: ${a.averageTime || ''}
        <br>
        🌐 <a href="${a.website}" target="_blank" rel="noopener">${a.website}</a>
        `
    );

    this.markersLayer.addLayer(marker);

    // auto-fit map to marker
    const bounds = this.markersLayer.getBounds();
    if (bounds.isValid()) {
      this.map.fitBounds(bounds.pad(0.2));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }


}
