import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { GitSearchUser } from '../git-search-user';

@Component({
  selector: 'app-git-search-user',
  templateUrl: './git-search-user.component.html',
  styleUrls: ['./git-search-user.component.css']
})
export class GitSearchUserComponent implements OnInit {
  searchResults: GitSearchUser;
  searchQuery: string;
  displayQuery: string;
  constructor(private GitSearchService: GitSearchService) { }

  ngOnInit() {
   this.searchQuery = 'konrad'
   this.displayQuery = this.searchQuery ;
   this.gitSearch();
  }

gitSearch =()=>{
  this.GitSearchService.gitSearchUser(this.searchQuery).then((response)=>{
    this.searchResults = response;
    this.displayQuery = this.searchQuery;
    //alert('Total repositories found: '+response.total_count);
  },(error) => {
   // alert('Error: '+ error.statusText);
   this.displayQuery= "error";
  })

}

}
