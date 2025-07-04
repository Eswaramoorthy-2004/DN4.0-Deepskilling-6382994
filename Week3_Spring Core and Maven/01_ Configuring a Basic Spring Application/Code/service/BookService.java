package com.example.demo.service;

import com.example.demo.repository.BookRepository;


public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void listBooks() {
        System.out.println("BookService: listing books...");
        bookRepository.fetchBooks();
    }
}