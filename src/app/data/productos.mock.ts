import {Producto} from '../models/producto'; 
export const PRODUCTOS_MOCK: Producto[] = [
    {
        id: 1,
        title: 'teclado mecanico gamer',
        price: 10.99,
        description: 'teclado gamer con luces de colores',
        images: ['https://picsum.photos/seed/teclado/300/200'],
        stock: 10,
        category: { id: 1, name: 'tecnologia' },
    },

    {
        id: 2,
        title: 'mouse gamer',
        price: 15.99,
        description: 'mouse gamer con dpi ajustable',
        images: ['https://picsum.photos/seed/mouse/300/200'],
        stock: 15,
        category: { id: 1, name: 'tecnologia' },
    },

    {
        id: 3,
        title: 'monitor gamer',
        price: 199.99,
        description: 'monitor gamer con resolucion 4k',
        images: ['https://picsum.photos/seed/monitor/300/200'],
        stock: 5,
        category: { id: 1, name: 'tecnologia' },
    },

    {
        id: 4,
        title: 'camiseta personalizada',
        price: 18.99,
        description: 'camiserta con diseño personalizado',
        images: ['https://picsum.photos/seed/camiseta/300/200'],
        stock: 0,
        category: { id: 2, name: 'ropa' },
    },

    {
        id: 5,
        title: 'pantalon personalizado',
        price: 25.99,
        description: 'pantalon con diseño personalizado',
        images: ['https://picsum.photos/seed/pantalon/300/200'],
        stock: 10,
        category: { id: 2, name: 'ropa' },
    },

    {
        id: 6,
        title: 'zapatillas personalizadas',
        price: 50.99,
        description: 'zapatillas con diseño personalizado',
        images: ['https://picsum.photos/seed/zapatillas/300/200'],
        stock: 5,
        category: { id: 2, name: 'ropa' },
    }


];

