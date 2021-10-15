import { ProductService } from './product.service';
import { Component, OnInit} from "@angular/core";
import { IProduct } from "./product";

@Component({
  selector: 'pm-product',
  templateUrl:'./product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  pageTitle: string ='Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;


  private _listFilter: string = '';

  get listFilter() : string {
    return this._listFilter;
  }

  set listFilter( value: string){
    this._listFilter = value;
    console.log('In setter: ' , value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];

  products: IProduct[] = [];

  constructor( private productService: ProductService){}

  toggleImage() :void{
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().includes(filterBy));
  }

  onRatingClicked(message: string): void{
    this.pageTitle = 'Product List: ' + message;
  }
  ngOnInit(): void{
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }
}