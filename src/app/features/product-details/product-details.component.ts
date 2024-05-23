import { Component, Input, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Products } from '../home/dataInter';
import { CurrencyPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  private _router = inject(Router);
  editPage(arg0: number) {
    this._router.navigate(['addproducts', arg0]);
  }
  @Input() id!: string;
  productData!: Products;
  private _products = inject(ProductService);
  ngOnInit(): void {
    this._products.getProductById(+this.id).subscribe((data) => {
      this.productData = data;
    });
  }
}
