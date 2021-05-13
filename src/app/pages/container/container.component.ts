import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { RegisterServiceComponent } from 'src/app/shared/register-service/register-service.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  closeSub: Subscription;

  constructor(private ComponentFactoryResolver: ComponentFactoryResolver) { }

  

  @ViewChild('componenteDinamico', { read: ViewContainerRef }) alertHost: ViewContainerRef;

  //@ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;


  ngOnInit(): void {
  }


  onGenerate(event:any): void{

    switch(event) { 
      case "component": { 
         //statements; 
         this.showMessageAlert("Event binding allows you to listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches.")
         break; 
      } 
      case "form": { 
         //statements;
         this.showFormDynamic("Event binding allows you to listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches.")
         break; 
      } 
      default: { 
         //statements; 
         break; 
      } 
   }
  }

  showMessageAlert(message: string) {
    const componentFactory = this.ComponentFactoryResolver.resolveComponentFactory(AlertModalComponent);
    this.alertHost.clear();
    const componentRef = this.alertHost.createComponent(componentFactory);
    componentRef.instance.error = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      this.alertHost.clear();
 
    })
   }

   showFormDynamic(message: string) {
    const componentFactory = this.ComponentFactoryResolver.resolveComponentFactory(RegisterServiceComponent);
    this.alertHost.clear();
    const componentRef = this.alertHost.createComponent(componentFactory);
    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      this.alertHost.clear();
 
    })
   }

}
