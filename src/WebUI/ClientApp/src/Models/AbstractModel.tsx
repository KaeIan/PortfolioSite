export default class AbstractModel implements IAbstractAttributes {
	constructor(attributes?: Partial<IAbstractAttributes>) {
		if (attributes) {
			if (attributes.id) {
				this.id = attributes.id;
			}
		}
	}

	public id?: string;
}

/**
 * All entities have these common attribute.
 */
export interface IAbstractAttributes {
	id?: string;
}

export interface IModelMethods {
	createModel: () => string;
	editModel: () => string;
	validateModel: () => string[];
}
