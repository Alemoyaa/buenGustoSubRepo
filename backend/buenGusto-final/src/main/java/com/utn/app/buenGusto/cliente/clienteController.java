package com.utn.app.buenGusto.cliente;
  
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping; 
import org.springframework.web.bind.annotation.RestController;

import com.utn.app.buenGusto.commons.commonController;
import com.utn.app.buenGusto.commons.commonIService; 

@RestController
@RequestMapping(path = "api/cliente")
public class clienteController extends commonController<clienteDTO>{

	@Autowired
	private clienteService servicio;
	
	public clienteController( commonIService<clienteDTO> servicio, clienteService cService) {
		super(servicio);
		this.servicio= cService;
	}
	
	@GetMapping("/firebase/{uid}") 
	public ResponseEntity<?> getOneUiDFirebase(@PathVariable String uid) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(servicio.findByUidFirebase(uid));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("{\"Mi mensaje getOneUiDFirebase \": \"" + e.getMessage() + "\"}");
		}
	}
}
