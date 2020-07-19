import { Component, OnInit, Input } from '@angular/core';
import { Factura } from 'src/app/entidades/Factura';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import { EstadoPedidoServices } from 'src/app/services/serviciosCliente/estadoPedidoServices/estadoPedido.service';
import { AlertsService } from 'src/app/services/alertServices/alerts.service';
import Swal from 'sweetalert2';
import { PedidoServices } from 'src/app/services/serviciosCliente/pedidoServices/pedido.service';
@Component({
  selector: 'app-modal-factura',
  templateUrl: './modal-factura.component.html',
  styleUrls: ['./modal-factura.component.css'],
})
export class ModalFacturaComponent implements OnInit {
  factura: Factura;
  @Input() set facturaProp(factura) {
    if (factura) {
      this.factura = factura;
    }
  }
  constructor(
    private pedidoService: PedidoServices,
    private alerts: AlertsService,
    private estadoPedidoService: EstadoPedidoServices
  ) { }

  ngOnInit(): void { }

  crearFacturaPDF() {
    var data = document.getElementById('facturaPDF');

    html2canvas(data).then((canvas) => {
      // Configuracion necesaria para la foto
      var imgWidth = 208;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;

      const contentDataURL = canvas.toDataURL('image/png'); //Creamos una imagen la cual despues convertimos
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 va a ser el tamaño del PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('factura.pdf'); // Generamos el PDF
    });
  }

  cambiarEstado(factura) {
    console.log(factura);

    this.estadoPedidoService.getOne(8).subscribe((estado) => {
      Swal.fire({
        title: `Realmente desea cambiar el estado del pedido a ${estado.nombreEstado}?`,
        text:
          'Recuerda que una vez asignado un nuevo estado, no podras volver a cambiarlo!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, modificar estado',
        cancelButtonText: 'Cancelar modificacion',
      }).then((result) => {
        if (result.value) {
          console.log(estado);
          this.factura.pedidofacturado.estadoPedido.id = 8;
          this.factura.pedidofacturado.estadoPedido.nombreEstado = 'Facturado';

          this.pedidoService
            .editarEstadoPedido(
              this.factura.pedidofacturado.id,
              this.factura.pedidofacturado.estadoPedido
            )
            .subscribe();
          console.log(this.factura);

          Swal.fire(
            `El estado de su pedido fue modificado correctamente a: ${estado.nombreEstado}`,
            'Puedes continuar con mas pedidos en la seccion de Estados de Pedidos!',
            'success'
          );
        } else {
        }
      });
    });
  }
}
