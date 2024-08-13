import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  constructor(private service: ProductService) {}

  public ngOnInit(): void {
    this.getAllProducts();
    this.createProduct();
  }

  private createProduct() {
    const product: ProductRepresentation = {
      title: 'My product',
      description: 'Product description',
      price: 12,
      category: 'Any category',
      image: 'https://someImageUrl',
    };
    this.service.createProduct(product).subscribe({
      next: (data: ProductRepresentation) => {
        console.log(data);
      },
      error: (error: HttpErrorResponse) => {
        if (error instanceof ErrorEvent) {
          console.error('An error occured: ', error);
        } else {
          console.error('Server side error: ', error.message);
        }
      },
    });
  }

  private getAllProducts() {
    this.service.getAllProductsWithLimit().subscribe({
      next: (data: ProductRepresentation[]) => {
        console.log(data);
      },
    });
  }
}
