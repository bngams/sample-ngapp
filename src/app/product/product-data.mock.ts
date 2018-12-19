export const PRODUCTS: any = [
    {
        id: 1,
        name: 'Microsoft Surface',
        price: '500',
        imgUrl: undefined,
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem magni explicabo porro',
        category: 'tech'
    },
    {
        id: 2,
        name: 'Apple iMac',
        price: '800',
        imgUrl: 'https://imgplaceholder.com/640x480',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem magni explicabo porro',
        category: 'tech'
    },
    {
        id: 3,
        name: 'Apple iWatch',
        price: '300',
        imgUrl: 'https://imgplaceholder.com/640x480',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem magni explicabo porro',
        category: 'tech'
    },
    {
        id: 4,
        name: 'Google Home',
        price: '60',
        imgUrl: 'https://imgplaceholder.com/640x480',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem magni explicabo porro',
        category: 'tech'
    }
];

export function findProductById(id: number) {
    return PRODUCTS.find(product => product.id === id);
}
