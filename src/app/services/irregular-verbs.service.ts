import { Injectable } from '@angular/core';
import data from 'src/irregular-verbs.json';
import { IrregularVerb } from "../core/models/irregular-verb";

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
		str = str.toLowerCase();
		const result: IrregularVerb[] = [];

		this.IrregularVerbs.forEach((verb) => {
			if (verb.Base.toLowerCase().includes(str) ||
				verb.PastSimple.toLowerCase().includes(str) ||
				verb.PastParticiple.toLowerCase().includes(str) ||
				verb.GerundAndPresentParticiple.toLowerCase().includes(str)) {
				result.push(verb);
			}
		});

		if (result === [])
			return undefined;

		return result;
	}
}
