package com.utn.app.buenGusto.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.utn.app.buenGusto.entities.RolEntity;

@Repository
public interface RolRepository extends JpaRepository<RolEntity, Long>{}

