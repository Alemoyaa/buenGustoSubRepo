package com.utn.app.buenGusto.horarioLaboral;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.utn.app.buenGusto.common.CommonController;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE,
		RequestMethod.PUT })
@RequestMapping(path = "api/horario_laboral")
public class HorarioLaboralController
		extends CommonController<HorarioLaboralEntity, HorarioLaboralService> {
	
	@GetMapping("/dia/{nombredia}")
	public ResponseEntity<?> getAll(@PathVariable String nombredia) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(service.findAllHabwithName(true, nombredia));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("{\"Error in getAll \": \"" + e.getMessage() + "\"}");
		}
	}

}