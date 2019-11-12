// @ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// In-memory Web API imports
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// ROUTING
import { AppRoutingModule } from './app-routing.module';

// SERVICES
import { InMemoryDataService } from './service/in-memory-data.service';

// COMPONENT
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { MessagesComponent } from './component/messages/messages.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		HeroesComponent,
		HeroDetailComponent,
		MessagesComponent,
		HeroSearchComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule,
		// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
		// and returns simulated server responses.
		// Remove it when a real server is ready to receive requests.
		HttpClientInMemoryWebApiModule.forRoot(
			InMemoryDataService, { dataEncapsulation: false }
		)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
