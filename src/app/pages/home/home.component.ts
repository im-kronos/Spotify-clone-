import { Component,OnInit } from '@angular/core';
import { SearchBarService } from 'src/app/services/searchbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public songCards=[
  ];
  constructor(private sb:SearchBarService){}
  ngOnInit(): void {}
      onNavigate(pageName: string)
      {
        if(pageName=='search')
        {
        this.sb.isSearchVisible.next(true);
        }

        else 
        {
          this.sb.isSearchVisible.next(false);
        }
        
      }
    
  }


