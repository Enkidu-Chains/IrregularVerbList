import { Component } from '@angular/core';
import { environment } from "../environments/environment";
import { IrregularVerb } from "./core/models/irregular-verb";
import { IrregularVerbsService } from "./services/irregular-verbs.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	public irregularVerbs?: IrregularVerb[];
	public title: string;
	public githubRepositoryHRef: string;

	constructor(private _irregularVerbsService: IrregularVerbsService) {
		this.irregularVerbs = _irregularVerbsService.IrregularVerbs;
		this.title = environment.title;
		this.githubRepositoryHRef = environment.githubRepositoryHRef;
	}

	public resetIrregularVerbs(value: string): void {
		this.irregularVerbs = this._irregularVerbsService.find(value);
	}
}
