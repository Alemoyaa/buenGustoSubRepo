package com.utn.app.buenGusto.common;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

public class CommonController<E, S extends CommonIService<E>> {
	@Autowired
	protected S service;

	@GetMapping("/count")
	@Transactional
	public ResponseEntity<?> getCount(@RequestParam(value = "size", defaultValue = "10") int size) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body("{\"pages\": " + service.countPages(size) + "}");
		} catch (Exception e) {
			return null;
		}
	}

	@GetMapping("")
	@Transactional
	public ResponseEntity<?> getAll(/*@RequestParam(value = "page", defaultValue = "0") int page,
			@RequestParam(value = "size", defaultValue = "10") int size*/) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(service.findAll(/*page, size*/));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("{\"Error in getAll \": \"" + e.getMessage() + "\"}");
		}
	}

	@GetMapping("/{id}")
	@Transactional
	public ResponseEntity<?> getOne(@PathVariable long id) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(service.findById(id));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body("{\"Error in getOne \": \"" + e.getMessage() + "\"}");
		}
	}

	@PostMapping("/")
	@Transactional
	public ResponseEntity<?> post(@RequestBody E personaForm) {

		try {

			return ResponseEntity.status(HttpStatus.CREATED).body(service.save(personaForm));

		} catch (Exception e) {

			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body("{\"Error in Post \": \"" + e.getMessage() + "\"}");

		}

	}

	@PutMapping("/{id}")
	@Transactional
	public ResponseEntity<?> put(@PathVariable long id, @RequestBody E entity) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(service.update(id, entity));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"Error in Put\": \"" + e.getMessage() + "\"}");
		}
	}

	@DeleteMapping("/{id}")
	@Transactional
	public ResponseEntity<?> delete(@PathVariable long id) {
		try {
			return ResponseEntity.status(HttpStatus.OK).body(service.delete(id));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body("{\"Error in Delete \": \"" + e.getMessage() + "\"}");
		}
	}
}
