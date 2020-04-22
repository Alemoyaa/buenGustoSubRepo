package com.utn.app.buenGusto.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.utn.app.buenGusto.entities.ArticuloManufacturadoEntity;

@Repository
public interface ArticuloManufacturadoRepository extends JpaRepository<ArticuloManufacturadoEntity, Long>{}
