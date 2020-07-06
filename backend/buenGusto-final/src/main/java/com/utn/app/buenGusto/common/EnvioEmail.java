package com.utn.app.buenGusto.common;

import java.io.IOException;
import java.io.InputStream;

import javax.activation.DataSource;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.MailParseException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.multipart.MultipartFile;

public class EnvioEmail
{
	private JavaMailSender mailSender;
	private SimpleMailMessage simpleMailMessage;

	public void setSimpleMailMessage(SimpleMailMessage simpleMailMessage) {
		this.simpleMailMessage = simpleMailMessage;
	}

	public void setMailSender(JavaMailSender mailSender) {
		this.mailSender = mailSender;
	}

	public void sendMail(String to, String subject, String dear, String date, MultipartFile file) {

	   MimeMessage message = mailSender.createMimeMessage();

	   try{
		MimeMessageHelper helper = new MimeMessageHelper(message, true);

		helper.setFrom(simpleMailMessage.getFrom());
		helper.setTo(to);
		helper.setSubject(subject);
		helper.setText(String.format(
			simpleMailMessage.getText(), dear, date));
		
		InputStream file2 = null;
		try {
			file2 = file.getInputStream();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		helper.addAttachment("Factura", (DataSource) file2);

		/*FileSystemResource file = new FileSystemResource("/home/luis/Escritorio/TRABAJO FINAL.pdf")
		helper.addAttachment(file.getFilename(), file);*/

	     }catch (MessagingException e) {
		throw new MailParseException(e);
	     }
	     mailSender.send(message);
         }
}


