import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //He It defines which defature shoulkd be loaded
  loadedFeature = 'Recipe';
  
  onNavigate(feature: string ){
   this.loadedFeature = feature ;
   }

}


