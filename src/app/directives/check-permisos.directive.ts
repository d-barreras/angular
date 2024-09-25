import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCheckPermisos]',
  standalone: true
})
export class CheckPermisosDirective {

  userPermissions = ['ADMIN'];

  constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<any>) { }

  @Input() set appCheckPermisos(requiredPermission: string) {
    this.updateView(requiredPermission);
  }
  
  private updateView(requiredPermission: string) {
    if (this.userPermissions.includes(requiredPermission)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }


}
