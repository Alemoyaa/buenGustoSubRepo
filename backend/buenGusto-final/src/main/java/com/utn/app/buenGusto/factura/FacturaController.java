package com.utn.app.buenGusto.factura;


import java.io.File;
import java.io.FileOutputStream;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.lowagie.text.Document;
import com.lowagie.text.Image;
import com.lowagie.text.pdf.PdfWriter;
import com.utn.app.buenGusto.common.CommonController;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE,
		RequestMethod.PUT })
@RequestMapping(path = "api/factura", consumes=MediaType.MULTIPART_FORM_DATA_VALUE)
public class FacturaController extends CommonController<FacturaEntity, FacturaService> {
	
	@PostMapping("/pdf/")
	@Transactional
	public ResponseEntity<?> post(@RequestParam("file") MultipartFile file){
		try {
			String conv = file.getOriginalFilename();
			File convertFile = new File("src/output/"+file.getOriginalFilename());
			convertFile.createNewFile();
			FileOutputStream fout = new FileOutputStream(convertFile);
			fout.write(file.getBytes());
			fout.close();
			
			Document document = new Document();
			//String input = filename + "." + extension;
			String output = "src/output/" + file.getOriginalFilename() + ".pdf";
			FileOutputStream fos = new FileOutputStream(output);
			 
			PdfWriter writer = PdfWriter.getInstance(document, fos);
			writer.open();
			document.open();
			document.add(Image.getInstance("src/output/"+file.getOriginalFilename()));
			document.close();
			writer.close();
			    
			//return ResponseEntity.status(HttpStatus.CREATED).body(service.mandarEmail(file, id));
			
			return ResponseEntity.status(HttpStatus.OK)
					.body(conv);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body("{\"Error in Post \": \"" + e.getMessage() + "\"}");
		}

	}
	

}
