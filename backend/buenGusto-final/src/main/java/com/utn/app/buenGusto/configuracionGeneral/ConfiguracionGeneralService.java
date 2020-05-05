package com.utn.app.buenGusto.configuracionGeneral;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utn.app.buenGusto.common.CommonService;

@Service
public class ConfiguracionGeneralService extends CommonService<ConfiguracionGeneralEntity, ConfiguracionGeneralDTO> {

	@Autowired
	private ConfiguracionGeneralRepository repository;

	public ConfiguracionGeneralService(ConfiguracionGeneralRepository configuracionRepository,
			ModelMapper modelMapper) {
		super(configuracionRepository, ConfiguracionGeneralDTO.class, ConfiguracionGeneralEntity.class, modelMapper);
		this.repository = configuracionRepository;
	}
}
