import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'backgroundCurvaceous';

  @ViewChild('Overpage')pre: ElementRef | undefined;

  
ngAfterViewInit(){
  window.onmousemove = e =>{
    rotateElement(e, this.pre);
  }
}

}

function rotateElement(event: any, element: any){
  const x = event.clientX;
  const y = event.clientY

  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  const offsetX = ((x - middleX) / middleX) * 45;
  const offsetY = ((y - middleY) / middleY) * 45;

  document.getElementById('Overpage')!.style.setProperty("--rotateX",-1 * offsetY + "deg")
  document.getElementById('Overpage')!.style.setProperty("--rotateY", offsetX + "deg")
}