
/**
 * @enum
 * @desc 封闭的数据类型
 */


export class Product {
    constructor(
        public id?: number,
        public name?: string,
        public category?: string,
        public description?: string,
        public price?: number,
    ) { }
}

