import { Component } from '@angular/core';
import { Product } from '../model/production.model';
import { ProductRespository} from '../model/product.respository';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'store',
    // moduleId: module.id,
    templateUrl: 'store.component.html',
    styleUrls: ['store.component.scss']
})

export class StoreComponent {
    public selectedCategory = null;
    constructor(private respository: ProductRespository) {}

    get products(): Product[] {
        return this.respository.getProducts(this.selectedCategory);
    }

    get getCategories(): string[] {
        return this.respository.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

}



