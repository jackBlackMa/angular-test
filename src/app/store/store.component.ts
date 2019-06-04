import { Component } from '@angular/core';
import { Product } from '../model/production.model';
import { ProductRespository} from '../model/product.respository';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'store',
    // moduleId: module.id,
    templateUrl: 'store.component.html',
})

export class StoreComponent {
    constructor(private respository: ProductRespository) {}

    get products(): Product[] {
        return this.respository.getProducts();
    }

    get getCategories(): string[] {
        return this.respository.getCategories();
    }

}



