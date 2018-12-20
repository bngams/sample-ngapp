import { Resource } from '../shared/api/resource';

export class Product extends Resource<number> {

    constructor(public id: number,
        public name: string,
        public price: number,
        public imgUrl: string,
        public desc: string,
        public category: string,
    ) {
        super();
    }

}
