package com.utn.app.buenGusto.commons;
 
import java.lang.reflect.Type;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional; 

public class commonService <ENTITY extends commonEntity, DTO extends commonDTO> implements commonIService<DTO>{
	private JpaRepository<ENTITY,Long>repository;
	private Class<DTO> dtoClass;
	private Class<ENTITY> entityClass;
	private ModelMapper mMapper;
	
	
	public commonService(JpaRepository<ENTITY, Long> repository, Class<DTO> dtoClass, Class entityClass, ModelMapper mMapper) {
        this.repository = repository;
        this.dtoClass = dtoClass;
        this.entityClass = entityClass;
        this.mMapper = mMapper;
    }
	
	   private DTO convertToDto(ENTITY entity) {
	        return  mMapper.map(entity, (Type) dtoClass);
	    }

	    private ENTITY convertToEntity(DTO dto) {
	        return  mMapper.map(dto, (Type) entityClass);
	    }
	
	
	
    @Override
    @Transactional
    public List<DTO> findAll() throws Exception {
        List<ENTITY> entities = repository.findAll();
        try {
            return entities.stream().map(this::convertToDto).collect(Collectors.toList());
        } catch (Exception e) {
            throw new Exception();
        } 
    }
    
    
 
    
    @Override
    @Transactional
    public DTO save(DTO dto) throws Exception {
        try {
            ENTITY entity = repository.save(convertToEntity(dto));
            return convertToDto(entity);
        } catch (Exception e) {
            throw new Exception();
        }
    }

    @Override
    @Transactional
    public DTO update(long id, DTO dto) throws Exception {
        Optional<ENTITY> entityOptional = repository.findById(id);
        try {
            ENTITY entity = entityOptional.get();
            ENTITY entityParams = convertToEntity(dto);
            try {
                if (repository.existsById(id)) {
                    entityParams.setId(id);
                    entity = repository.save(entityParams);
                    return convertToDto(entity);
                } else {
                    throw new Exception();
                }
            } catch (Exception e) {
                throw new Exception();
            }
        } catch (Exception e) {
            throw new Exception();
        }
    }

 
 
	@Override
	public int countPages(int size) throws Exception {
		try {
			Pageable pageable = PageRequest.of(0, size);
			return repository.findAll(pageable).getTotalPages();			

		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}

	

	@Override
	public DTO findById(long id) throws Exception {
		

        Optional<ENTITY> entityOptional = repository.findById(id);
        try {
            if (entityOptional.isPresent()) {
                return convertToDto(entityOptional.get());
            } else {
                throw new Exception();
            }
        } catch (Exception e) {
            throw new Exception();
        }
		
	}

	@Override
	public boolean delete(long id) throws Exception {
		try {
            if (repository.existsById(id)) {
                repository.deleteById(id);
                return true;
            } else {
                throw new Exception();
            }
        } catch (Exception e) {
            throw new Exception();
        }
	}

	@Override
	public List<DTO> findAll(int page, int size) throws Exception {
		try {
			Pageable pageable = PageRequest.of(page, size);
			
			List<ENTITY> entities = repository.findAll(pageable).getContent();
			
			return  entities.stream().map(this::convertToDto).collect(Collectors.toList());			

		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
	}
 
}
