import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { GitSearch } from '../git-search';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  searchResults: GitSearch;
  searchQuery: string;

  constructor(private GitSearchService: GitSearchService) { }

  ngOnInit() {
   this.searchQuery = 'java'
   this.gitSearch();
  }

gitSearch =()=>{
  this.GitSearchService.gitSearch(this.searchQuery).then((response)=>{
    this.searchResults = response;
    //alert('Total repositories found: '+response.total_count);
  },(error) => {
    alert('Error: '+ error.statusText);
  })

}

}