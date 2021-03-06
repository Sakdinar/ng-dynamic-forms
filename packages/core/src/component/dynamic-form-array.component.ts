import { QueryList } from "@angular/core";
import { DynamicFormControlComponent } from "./dynamic-form-control.component";
import { DynamicTemplateDirective } from "../directive/dynamic-template.directive";
import { DynamicFormArrayModel } from "../model/form-array/dynamic-form-array.model";

export abstract class DynamicFormArrayComponent extends DynamicFormControlComponent {

    model: DynamicFormArrayModel;
    templates: QueryList<DynamicTemplateDirective> | undefined;

    get startTemplate(): DynamicTemplateDirective | undefined {
        return this.layoutService.getStartTemplate(this.model, this.templates);
    }

    get endTemplate(): DynamicTemplateDirective | undefined {
        return this.layoutService.getEndTemplate(this.model, this.templates);
    }
}