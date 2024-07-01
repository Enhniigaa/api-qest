import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';

import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import routeConfig from "./app/routes"


bootstrapApplication(AppComponent, 
  {
    providers: [  
      provideProtractorTestingSupport(),
      provideRouter(routeConfig)
    ]
  }
)

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
