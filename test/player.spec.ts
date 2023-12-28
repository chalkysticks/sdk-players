import test from 'node:test';
import assert from 'node:assert/strict';
import { Model } from '../src';

const model: Model.Player = new Model.Player({
	id: 1,
	name: 'Matt Kenefick',
});

test('hello', () => {
	const message = 'Hello';
	assert.equal(message, 'Hello', 'checking the greeting');
});

test('Player - Local', () => {
	const name = model.getName();

	assert.equal(name, 'Matt Kenefick', 'checking the name');
});
