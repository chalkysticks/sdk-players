import { expect } from 'chai';
import { Model } from '../src';

const model: Model.Player = new Model.Player({
    id: 1,
	name: 'Matt Kenefick',
});

describe('Player - Local', () => {
    it('should have a name', () => {
		const name = model.getName();

        expect(name).to.equal('Matt Kenefick');
    });
});
