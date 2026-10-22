import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';
import { PRODUCTOS_MOCK} from '../../data/productos.mock';
import { TarjetaProductoComponent} from '../../components/tarjeta-producto/tarjeta-producto.component';
import { TablaProductosComponent } from '../../components/tabla-productos/tabla-productos.component';

@Component({
  selector: 'app-catalogo-page',
  standalone: true,
  imports: [CommonModule, TarjetaProductoComponent, TablaProductosComponent],
  templateUrl: './catalogo-page.component.html',
  styleUrl: './catalogo-page.component.css'
})
export class CatalogoPageComponent {
  productos = signal<Producto[]>(PRODUCTOS_MOCK);
  rol = signal<'admin' | 'customer'>('customer');
  categoriaSeleccionada = signal<string>('todas');
  carrito = signal<Producto[]>([]);

  // 1. Filtra los productos automáticamente según la categoría
productosFiltrados = computed(() => {
  const categoria = this.categoriaSeleccionada();
  const todos = this.productos();
  if (categoria === 'todas') {
    return todos;
  }
  return todos.filter(p => p.category.name === categoria);
});

// 2. Cuenta cuántos productos hay en el carrito
cantidadCarrito = computed(() => this.carrito().length);

// 3. Suma el precio total del carrito
totalCarrito = computed(() => {
  return this.carrito().reduce((total, p) => total + p.price, 0);
});

// Alterna entre vista de cliente y administrador
cambiarRol(): void {
  this.rol.update(actual => actual === 'customer' ? 'admin' : 'customer');
}

// Cambia la categoría cuando el usuario toca un botón de filtro
seleccionarCategoria(cat: string): void {
  this.categoriaSeleccionada.set(cat);
}

// Escucha el timbre de la tarjeta y mete el producto al carrito
onAgregarAlCarrito(producto: Producto): void {
  this.carrito.update(lista => [...lista, producto]);
}

// Escucha el timbre de editar de la tabla
onEditarProducto(producto: Producto): void {
  alert('Editando producto: ' + producto.title);
}

// Escucha el timbre de eliminar de la tabla y lo quita de la lista
onEliminarProducto(producto: Producto): void {
  this.productos.update(lista => lista.filter(p => p.id !== producto.id));
}

// Obligatorio para el *ngFor de las tarjetas
trackById(index: number, producto: Producto): number {
  return producto.id;
}

}


