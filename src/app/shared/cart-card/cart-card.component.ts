import { Products } from './../../features/home/dataInter';
import { Component, Inject, Input, inject, input } from '@angular/core';
import { UnsenitizePipe } from '../../pipes/unsenitize.pipe';
import { ProductService } from '../../services/product.service';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart-card',
  standalone: true,
  imports: [UnsenitizePipe, RouterLink],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.scss',
})
export class CartCardComponent {
  private _router = inject(Router);
  edit(arg: number) {
    console.log(arg);
    this._router.navigate([`/addproducts/${arg}`]);
  }
  @Input({ required: true }) products: any;
  @Input() delete: boolean = false;
  constructor(private _products: ProductService) {}
  deleteProduct(id: number) {
    this._products.deleteProducts(id).subscribe((data) => {
      console.log('data :>> ', data.isDeleted);
      if (data.isDeleted) {
        alert('product deleted Successfully');
      }
    });
  }
}
