package com.utn.app.buenGusto.formaPago;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormaPagoRepository extends JpaRepository<FormaPagoEntity, Long>{}
