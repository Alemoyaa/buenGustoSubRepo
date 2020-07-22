package com.utn.app.buenGusto.common;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.MailParseException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

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

	public void sendMail(String to, String subject, String dear, String date, String fileURL) {

	   MimeMessage message = mailSender.createMimeMessage();

	   try{
		MimeMessageHelper helper = new MimeMessageHelper(message, true);

		helper.setFrom(simpleMailMessage.getFrom());
		helper.setTo(to);
		helper.setSubject(subject);
		helper.setText(String.format(simpleMailMessage.getText(), dear, date));
		FileSystemResource file = new FileSystemResource(fileURL);
		helper.addAttachment(file.getFilename(), file);

	     }catch (MessagingException e) {
		throw new MailParseException(e);
	     }
	     mailSender.send(message);
         }
	
	
}


