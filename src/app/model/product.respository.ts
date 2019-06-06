/**
 * @desc 数据存储库
 */
import { Injectable } from '@angular/core';
import { Product } from './production.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class ProductRespository {
    // 产品
    private products: Product[] = [];
    // 产品说明
    private categories: string[] = [];

    constructor(private datasource: StaticDataSource) {
        datasource.getProducts().subscribe(data => {
            this.products = data;
            this.categories = data.map(p => p.category).
                filter((c, index, array) => array.indexOf(c) === index).sort();
        });
    }

    getProducts(category: string = null): Product[] {
        return this.products.filter(
            p => category == null || category === p.category
        );
    }

    getProdct(id: number): Product {
        return this.products.find( p => id === p.id);
    }

    getCategories(): string[] {
        return this.categories;
    }
}
