import { Component, ViewEncapsulation } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  standalone: true,
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css',
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, FormsModule]
})
export class BookFormComponent {
  book: any = {};

  constructor(
    private _bookService: BookService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    
    if (id) {
      this._bookService.getBookById(id).subscribe((response) => {
        this.book = response;
      });
    }
  }

  saveBook(): void {
    if (this.book.id) {
      this._bookService.updateBook(this.book).subscribe(() => {
        this._router.navigate(['/']);
      });
    } else {
      this._bookService.addBook(this.book).subscribe(() => {
        this._router.navigate(['/']);
      });
    }
  }
}
