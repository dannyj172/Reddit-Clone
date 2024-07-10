import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  searchForm = this.formBuilder.group({
    search: ['', [Validators.required]],
  });
  searchTerm = '';

  constructor(
    activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) this.searchTerm = params['searchTerm'];
    });
  }

  search(): void {
    if (this.searchForm.invalid) return;
    const { search } = this.searchForm.value;
    this.router.navigateByUrl('search/' + search);
  }
}
