package com.utn.app.buenGusto.domicilio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.utn.app.buenGusto.pedido.pedidoEntity;

public interface domicilioRepository extends JpaRepository<pedidoEntity, Long>{

}
