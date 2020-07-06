package com.utn.app.buenGusto.factura;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.utn.app.buenGusto.common.CommonController;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE,
		RequestMethod.PUT })
@RequestMapping(path = "api/factura")
public class FacturaController extends CommonController<FacturaEntity, FacturaService> {
	
	@PostMapping("/pdf/{id}")
	@Transactional
	public ResponseEntity<?> post(@PathVariable long id, @RequestBody MultipartFile file){

		try {
			
			return ResponseEntity.status(HttpStatus.CREATED).body(service.mandarEmail(file, id));

		} catch (Exception e) {

			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body("{\"Error in Post \": \"" + e.getMessage() + "\"}");

		}

	}

}
