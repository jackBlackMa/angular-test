/**
 * @desc 功能模块
 */
import { NgModule } from '@angular/core';
import { ProductRespository } from './product.respository';
import { StaticDataSource } from './static.datasource';

@NgModule({
    providers: [ProductRespository, StaticDataSource]
})

export class ModelModule { }

