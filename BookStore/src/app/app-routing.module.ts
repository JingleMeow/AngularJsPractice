import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/booklist', pathMatch: 'full' },
  { path: 'booklist', component: BookListComponent },
  { path: 'books/new', component: NewBookComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const routingComponents = [BookListComponent];
