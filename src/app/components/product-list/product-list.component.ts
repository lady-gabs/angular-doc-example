import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productsInfos } from '../../products';
import { ProductAlertsComponent } from "../product-alerts/product-alerts.component";

@Component({
    selector: 'app-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    imports: [CommonModule, ProductAlertsComponent]
})
export class ProductListComponent {
  products = [...productsInfos]; 

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  
}
