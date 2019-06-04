 /**
  * @desc 模拟数据
  */
 import { Injectable } from '@angular/core';
 import { Product } from './production.model';
//  import 'rxjs/add/observable/from';
 import { Observable, from } from 'rxjs';

 @Injectable()
 export class StaticDataSource {
    private productions: Product[] = [
        new Product(1, 'Product 1', 'Category 1', 'Product 1 (Category 1)', 100),
        new Product(2, 'Product 2', 'Category 2', 'Product 2 (Category 2)', 100),
        new Product(3, 'Product 3', 'Category 3', 'Product 3 (Category 3)', 100),
        new Product(4, 'Product 4', 'Category 4', 'Product 4 (Category 4)', 100),
        new Product(5, 'Product 5', 'Category 5', 'Product 5 (Category 5)', 100),
    ];

    getProducts(): Observable<Product []> {
        return from([this.productions]);
    }
 }

