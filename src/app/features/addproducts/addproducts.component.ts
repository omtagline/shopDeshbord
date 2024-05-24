import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addproducts',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './addproducts.component.html',
  styleUrl: './addproducts.component.scss',
})
export class AddproductsComponent {
  private _navigateRouter = inject(Router);
  resetForm() {
    this.addform.patchValue({
      title: '',
      description: '',
      thumbnail: '',
      price: '',
      rating: '',

      category: 'select Category',
    });
  }
  editProducts() {
    this.products
      .updateProduct(this.addform.value, this.editProductId)
      .subscribe((data) => {
        console.log(data);
        alert('product updated');
        this._navigateRouter.navigate(['product']);
      });
  }
  editProductId!: string | null;
  ngOnInit(): void {
    this._router.paramMap.subscribe((data) => {
      this.editProductId = data.get('id');
    });
    if (this.editProductId) {
      this.products.getProductById(+this.editProductId).subscribe((data) => {
        console.log(data);
        // this.addform.setValue({
        //   ...data,
        // });
        this.addform.patchValue({
          ...data,
        });
      });
    }
  }
  addProducts() {
    this.products.addProducts(this.addform.value);
  }
  category: string[] = [];
  public addform!: FormGroup;

  constructor(
    private _router: ActivatedRoute,
    private products: ProductService,
    private formBulder: FormBuilder
  ) {
    products.getCategory().subscribe((data) => {
      console.log(data);
      this.category = data;
    });
    this.createForm();
  }
  createForm() {
    this.addform = this.formBulder.group({
      category: ['select Category', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      thumbnail: ['', [Validators.required]],
      rating: ['', [Validators.required]],
    });
  }
}
