import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';

@Component({
    selector: 'app-tarjeta-producto',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tarjeta-producto.component.html',
    styleUrl: './tarjeta-producto.component.css'
})

export class TarjetaProductoComponent {
    @Input({required: true}) producto!: Producto;
    @Output() agregar = new EventEmitter<Producto>();
    onAgregar(): void {
  this.agregar.emit(this.producto);
  }

}