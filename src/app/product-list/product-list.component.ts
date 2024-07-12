import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Product} from "../product";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Product 1', price: 100, description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', price: 150, description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', price: 200, description: 'Description of Product 3' }
  ];
}
