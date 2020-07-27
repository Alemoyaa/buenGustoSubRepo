package com.utn.app.buenGusto.articuloInsumo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.utn.app.buenGusto.common.CommonController;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE,
		RequestMethod.PUT })
@RequestMapping(path = "api/articulo_insumo")
public class ArticuloInsumoController extends CommonController<ArticuloInsumoEntity, ArticuloInsumoService> {

	
	@PutMapping("/reponer/{id}")
	@Transactional
	public ResponseEntity<?> putReponer(@PathVariable long id, @RequestBody ArticuloInsumoEntity entity) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(service.reponerStockService(id, entity.getStock_actual(), entity.getPrecio_de_compra()));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"Error in Put\": \"" + e.getMessage() + "\"}");
		}
	}
}
