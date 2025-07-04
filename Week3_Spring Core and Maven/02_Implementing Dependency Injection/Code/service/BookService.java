package com.example.demo.service;

import com.example.demo.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("BookService: BookRepository has been set.");
    }

    public void listBooks() {
        System.out.println("BookService: Preparing to list books...");
        bookRepository.fetchBooks();
        System.out.println("BookService: Book listing complete.");
    }
}
