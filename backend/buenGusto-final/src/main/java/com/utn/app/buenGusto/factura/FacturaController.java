package com.utn.app.buenGusto.factura;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.utn.app.buenGusto.common.CommonController;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE,
		RequestMethod.PUT })
@RequestMapping(path = "api/factura")
public class FacturaController extends CommonController<FacturaEntity, FacturaService> {
	
	@PostMapping("/pdf/")
	@Transactional
	public ResponseEntity<?> post(@RequestBody FacturaEntity entity) {
		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(service.guardarYEnviar(entity));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body("{\"Error in Post \": \"" + e.getMessage() + "\"}");
		}
	}
	
	@GetMapping("/pdf/{id}")
	@Transactional
	public ResponseEntity<?> getOnePdf(@PathVariable long id) {
		try {
			service.mandarEmail(service.findById(id));
			return ResponseEntity.status(HttpStatus.OK).body("Email enviado.");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("{\"Error in getOne \": \"" + e.getMessage() + "\"}");
		}
	}

}
