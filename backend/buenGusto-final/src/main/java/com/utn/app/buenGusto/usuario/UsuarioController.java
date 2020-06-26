package com.utn.app.buenGusto.usuario;
 
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
@RequestMapping(path = "api/usuario")
public class UsuarioController extends CommonController<UsuarioEntity, UsuarioService> {


	@GetMapping("/email/{email}") 
	public ResponseEntity<?> getByEmail(@PathVariable String email) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(service.findByEmail(email));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("{\"Error in getOneByEmail \": \"" + e.getMessage() + "\"}");
		}
	}
	
}