import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BookService } from '../book.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, RouterLink]
})
export class BookListComponent implements OnInit {
  books: any[] = [];

  constructor(private _bookService: BookService) {}

  ngOnInit(): void {
    this._bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  deleteBook(id: number) {

  }
}
