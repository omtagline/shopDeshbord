import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Products } from '../home/dataInter';
import { CartCardComponent } from '../../shared/cart-card/cart-card.component';

@Component({
  selector: 'app-remove-products',
  standalone: true,
  imports: [CartCardComponent],
  templateUrl: './remove-products.component.html',
  styleUrl: './remove-products.component.scss',
})
export class RemoveProductsComponent {
  products!: Products[];
  category!: string[];
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
