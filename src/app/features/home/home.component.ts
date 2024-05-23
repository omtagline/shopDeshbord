import { Component } from '@angular/core';
import { CartCardComponent } from '../../shared/cart-card/cart-card.component';
import { ProductService } from '../../services/product.service';
import { ProductData, Products } from './dataInter';
import { HomeConatinerComponent } from '../../shared/home-conatiner/home-conatiner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CartCardComponent, HomeConatinerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  value(data: any) {
    return Object.values(data);
  }
  key(value: any) {
    return Object.keys(value);
  }
  constructor(private product: ProductService) {
    this.product.get().subscribe((data: ProductData) => {
      this.products = data.products;
      this.homeData.push({
        title: 'product',
        length: data.total,
        class: 'col-3',
      });
    });
    this.product.getCategory().subscribe((data) => {
      this.homeData.push({
        title: 'category',
        length: data.length,
        class: 'col-3',
      });
    });
  }
  public products: Products[] | undefined;

  homeData: any = [];
}
