package com.utn.app.buenGusto.pedido;

import java.sql.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.common.CommonController;
import com.utn.app.buenGusto.estadoPedido.EstadoPedidoEntity;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE,
		RequestMethod.PUT })
@RequestMapping(path = "api/pedido")
public class PedidoController extends CommonController<PedidoEntity, PedidoService> {

	@GetMapping("/no_detalle/{id}")
	@Transactional
	public ResponseEntity<?> getDetalle(@PathVariable long id) {

		try {
			return ResponseEntity.status(HttpStatus.OK).body(service.findByIdCortado(id));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("{\"Error in getDetalle \": \"" + e.getMessage() + "\"}"); 
		}
	}
	
	@GetMapping("/{desde}/{hasta}")
	@Transactional
	public ResponseEntity<?> getPedidosEntreDosFechas(@PathVariable Date desde,@PathVariable Date hasta) {

		try {
			return ResponseEntity.status(HttpStatus.OK).body(service.findPedidoEntreDosFechas(desde,hasta));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("{\"Error in getDetalle \": \"" + e.getMessage() + "\"}"); 
		}
	}
	
	@PutMapping("/cambiar_estado/{id}")
	@Transactional
	public ResponseEntity<?> putByIdEstado(@PathVariable long id, @RequestBody EstadoPedidoEntity estado) {

		try {
			return ResponseEntity.status(HttpStatus.OK).body(service.editarEstadoPedido(id, estado));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("{\"Error in getDetalle \": \"" + e.getMessage() + "\"}"); 
		}
	}
}
