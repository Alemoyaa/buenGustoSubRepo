package com.utn.app.buenGusto.common;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE,
		RequestMethod.PUT })
@Transactional
public class CommonController<DTO> {
	@Autowired
	protected CommonIService<DTO> service;

	public CommonController(CommonIService<DTO> service) {
		this.service = service;
	}

	@GetMapping("/count")
	public ResponseEntity<?> getCount(@RequestParam(value = "size", defaultValue = "10") int size) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body("{\"pages\": " + service.countPages(size) + "}");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("{\"Hubo un problema \": \"" + e.getMessage() + "\"}");
		}

	}

	@GetMapping("/")
	@Transactional
	public ResponseEntity<?> getAll(@RequestParam(value = "page", defaultValue = "0") int page,
			@RequestParam(value = "size", defaultValue = "10") int size) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(service.findAll(page, size));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("{\"Hubo un problema en el metodo getAll \": \"" + e.getMessage() + "\"}");
		}
	}

	@GetMapping("/{id}")
	@Transactional
	public ResponseEntity<?> getOne(@PathVariable long id) {

		try {
			return ResponseEntity.status(HttpStatus.OK).body(service.findById(id));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("{\"Hubo un problema en el metodo getOne \": \"" + e.getMessage() + "\"}");
		}
	}

	@PostMapping("/")
	@Transactional
	public ResponseEntity<?> post(@RequestBody DTO dto) {
		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(service.save(dto));
		} catch (Exception e) {

			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body("{\"Hubo un problema en el metodo Post \": \"" + e.getLocalizedMessage() + "\"}");

		}

	}

	@PutMapping("/{id}")
	@Transactional
	public ResponseEntity<?> put(@PathVariable long id, @RequestBody DTO dto) {

		try {

			return ResponseEntity.status(HttpStatus.OK).body(service.update(id, dto));

		} catch (Exception e) {

			return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY)
					.body("{\"Hubo un problema en el metodo Put \": \"" + e.getMessage() + "\"}");
		}

	}

	@DeleteMapping("/{id}")
	@Transactional
	public ResponseEntity<?> delete(@PathVariable long id) {

		try {

			return ResponseEntity.status(HttpStatus.OK).body(service.delete(id));

		} catch (Exception e) {

			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body("{\"Hubo un problema en el metodo Delete \": \"" + e.getMessage() + "\"}");
		}

	}

}
