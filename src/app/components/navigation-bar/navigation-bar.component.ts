import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
public my_Class = 'icon-bar';
public randomcolor='';
 public background_color="grey ";
  showSelected : boolean;
  iconStats = '';
      constructor(){
          this.showSelected = false;
      }
      ShowHide(){
        this.my_Class='style2';
           this.showSelected = !this.showSelected;
           this.background_color = "blue";
      }

      makeActive(){
        if (this.iconStats == ''){
          this.iconStats = 'active';
        }
        else {
          this.iconStats ='';
        }

      }

      toggle_class(){
          if(this.my_Class=="style1"){
              this.my_Class='style2';
          }else{
              this.my_Class='style1';
          }
      }

  ngOnInit() {
  }
}
