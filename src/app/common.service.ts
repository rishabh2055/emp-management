import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class CommonService{
	currentRoute: string = '';
	constructor(){console.log('here')}
	setCurrentRoute(route: string): void{
		this.currentRoute = route;
	}
	getCurrentRoute(): string{
		return this.currentRoute;
	}
}