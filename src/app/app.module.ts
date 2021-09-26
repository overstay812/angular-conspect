import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Part01BaseKnowledgeComponent } from './components/part01-base-knowledge/part01-base-knowledge.component';
import { Part02InputAndOutputComponent } from './components/part02-input-and-output/part02-input-and-output.component';
import { ExampleComponent } from './components/part02-input-and-output/example/example.component';
import { Part03StylesComponent } from './components/part03-styles/part03-styles.component';
import { Part04PipeComponent } from './components/part04-pipe/part04-pipe.component';
import { Part05ServiceComponent } from './components/part05-service/part05-service.component';
import { Part06HttpComponent } from './components/part06-http/part06-http.component';
import { HttpClientModule } from '@angular/common/http';
import { Part07DirectiveComponent } from './components/part07-directive/part07-directive.component';
import { StructuralDirectiveComponent } from './components/part07-directive/options/structural-directive/structural-directive.component';
import { Part08FormComponent } from './components/part08-form/part08-form.component';
import { BildInDirectiveComponent } from './components/part07-directive/options/bild-in-directive/bild-in-directive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttributeDirectiveComponent } from './components/part07-directive/options/attribute-directive/attribute-directive.component';
import { ColorgreenDirective } from './components/part07-directive/options/attribute-directive/colorgreen.directive';
import { HandmadePipeFilterPipe } from './components/part04-pipe/handmade-pipe-filter.pipe';
import { Part09LifecycleHooksComponent } from './components/part09-lifecycle-hooks/part09-lifecycle-hooks.component';
import { ChildComponent } from './components/part09-lifecycle-hooks/child/child.component';
import { Part10DecoratorComponent } from './components/part10-decorator/part10-decorator.component';
import { ChildExampleComponent } from './components/part10-decorator/child-example/child-example.component';
import { Part11NgContentAndNgContainerComponent } from './components/part11-ng-content-and-ng-container/part11-ng-content-and-ng-container.component';
import { Child11Component } from './components/part11-ng-content-and-ng-container/child11/child11.component';
import { Part12DependencyInjectionModule } from './components/part12-dependency-injection/part12-dependency-injection.module';
import { Part13RoutingComponent } from './components/part13-routing/part13-routing.component';
import { Part13RoutingModule } from './components/part13-routing/part13-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    Part01BaseKnowledgeComponent,
    Part02InputAndOutputComponent,
    ExampleComponent,
    Part03StylesComponent,
    Part04PipeComponent,
    Part05ServiceComponent,
    Part06HttpComponent,
    Part07DirectiveComponent,
    StructuralDirectiveComponent,
    Part08FormComponent,
    BildInDirectiveComponent,
    AttributeDirectiveComponent,
    ColorgreenDirective,
    HandmadePipeFilterPipe,
    Part09LifecycleHooksComponent,
    ChildComponent,
    Part10DecoratorComponent,
    ChildExampleComponent,
    Part11NgContentAndNgContainerComponent,
    Child11Component,
    Part13RoutingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Part12DependencyInjectionModule,
    Part13RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
