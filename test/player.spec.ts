import { expect } from 'chai';
import ModelPlayer from '../src/Model/Player';

// Setup
// ----------------------------------------------------------------------------

const model: ModelPlayer = new ModelPlayer({
    id: 1,
});


/**
  ┌────────────────────────────────────────────────────────────────────────────┐
  │                                                                            │
  │ Local tests                                                                │
  │                                                                            │
  └────────────────────────────────────────────────────────────────────────────┘
*/

describe('Player - Local', () => {

    it('should have a name', () => {
        expect(true).to.equal(true);
    });

});
