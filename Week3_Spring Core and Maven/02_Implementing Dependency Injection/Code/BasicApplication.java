package com.example.demo;


import com.example.demo.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


public class BasicApplication {

	public static void main(String[] args) {

		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

		
		BookService bookService = (BookService) context.getBean("bookService");

		
		bookService.listBooks();
	}

}
