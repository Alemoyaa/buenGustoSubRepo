package com.utn.app.buenGusto.cabezaPedido;
 
import java.util.Optional;

import org.springframework.stereotype.Service;
 
import com.utn.app.buenGusto.common.CommonService; 

@Service
public class CabezaPedidoService extends CommonService<CabezaPedidoEntity, CabezaPedidoRepository>{
	
	public CabezaPedidoDTO findByIdCortado(long id) throws Exception {
		
		try {

			Optional<CabezaPedidoEntity> varOptional = repository.findById(id);
			   
			CabezaPedidoDTO entity = new CabezaPedidoDTO(); 
			
			entity.setId(varOptional.get().getId());
			entity.setFechaRealizacion(varOptional.get().getFechaRealizacion());
			entity.setHora_estimada_fin(varOptional.get().getHora_estimada_fin());
			entity.setTipo_Envio(varOptional.get().isTipo_Envio());
			entity.setNumero(varOptional.get().getNumero());
			
			entity.setLista_historicoEstado(varOptional.get().getLista_historicoEstado());
			entity.setEstadoPedido(varOptional.get().getEstadoPedido());
			entity.setCabezaFacturaEntity(varOptional.get().getCabezaFacturaEntity());
			//entity.setLista_detallePedido(varOptional.get().getLista_detallePedido());
			
			entity.setCajeroPedido(varOptional.get().getCajeroPedido());
			entity.setClientePedido(varOptional.get().getClientePedido());
			entity.setCocineroPedido(varOptional.get().getCocineroPedido());
			entity.setRepartidorPedido(varOptional.get().getRepartidorPedido());
			
			return entity;

		} catch (Exception e) {

			throw new Exception(e.getMessage());
		}
		
	}
	
}
