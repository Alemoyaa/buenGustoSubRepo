package com.utn.app.buenGusto.cliente; 

import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService; 

@Service
public class ClienteService extends CommonService<ClienteEntity, ClienteRepository> {
	
	public ClienteEntity findByUidFirebase(String uid) throws Exception {

		ClienteEntity entityOptional = repository.findByUidFirebase(uid);
		
		try {
			if (entityOptional != null) {
				return entityOptional;
			} else {
				throw new Exception();
			}
		} catch (Exception e) {
			throw new Exception();
		}

	}
}
