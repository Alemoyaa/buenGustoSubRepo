package com.utn.app.buenGusto.usuario;

import org.springframework.stereotype.Service;
 
import com.utn.app.buenGusto.common.CommonService;

@Service
public class UsuarioService extends CommonService<UsuarioEntity, UsuarioRepository> { 
	
	public boolean findByEmail(String email) throws Exception {

		UsuarioEntity entityOptional = repository.findByEmail(email);
		
		try {
			if (entityOptional != null) {
				return true;
			} else {
				return false;
			}
		} catch (Exception e) {
			throw new Exception();
		}

	}
	
}
