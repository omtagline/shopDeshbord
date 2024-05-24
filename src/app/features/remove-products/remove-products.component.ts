import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Products } from '../home/dataInter';
import { CartCardComponent } from '../../shared/cart-card/cart-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-remove-products',
  standalone: true,
  imports: [CartCardComponent, FormsModule],
  templateUrl: './remove-products.component.html',
  styleUrl: './remove-products.component.scss',
})
export class RemoveProductsComponent {
  filterProducts(e: HTMLInputElement) {
    console.log(e.value);
    this.products = this.products.filter((d) => d.price <= +e.value);
  }
  products!: Products[];
  category!: string[];
  range: number = 0;
  constructor(private product: ProductService) {
    product.get().subscribe((data) => {
      this.products = data.products;
    });
    product.getCategory().subscribe((data) => {
      this.category = data;
    });
  }
  categoryChange(event: any) {
    this.product.get(event.target.value).subscribe((data) => {
      this.products = data.products;
    });
  }
}
