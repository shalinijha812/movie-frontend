import { Component, OnInit,EventEmitter,Output} from '@angular/core';


@Component({
  selector: 'app-search-dummy',
  templateUrl: './search-dummy.component.html',
  styleUrls: ['./search-dummy.component.css']
})
export class SearchDummyComponent implements OnInit {
  @Output() childEvent = new EventEmitter<string>();
  query='';
  onkeyUp(pName:string){
    this.query=pName;
    console.log(this.query);
  }
  linkParent(query:string){
    this.childEvent.emit(query);

  }


  constructor() { }

  ngOnInit() {
  }

}
