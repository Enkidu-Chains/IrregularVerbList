import { Injectable } from '@angular/core';
import { IrregularVerb } from "../core/models/irregular-verb";
import data from 'src/irregular-verbs.json';

@Injectable({
	providedIn: 'root'
})
export class IrregularVerbsService {
	private _irregularVerbs?: IrregularVerb[];

	public get IrregularVerbs(): IrregularVerb[] {
		if (!this._irregularVerbs) {
			this._irregularVerbs = data as IrregularVerb[];
		}

		return this._irregularVerbs;
	}

	public find(str: string): IrregularVerb[] | undefined {
		return this.IrregularVerbs.filter(value => {
			value.Base.includes(str) ||
			value.PastSimple.includes(str) ||
			value.PastParticiple.includes(str) ||
			value.GerundAndPresentParticiple.includes(str);
		});
	}
}
