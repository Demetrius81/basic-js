const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain?.length;
  },
  addLink(/*value*/) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.chain) {
      this.chain = [];
    }
    this.chain.push(
      `( ${value === undefined ? '' : value} )`.replace('{}', '{ }')
    );
    return this;
  },
  removeLink(/*position*/) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (position > this.chain?.length || position <= 0 || isNaN(+position)) {
      throw new Error(`You can\'t remove incorrect link!`);
    }
    this.chain?.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain?.reverse();
    return this;
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain?.join('~~');
  },
};

module.exports = {
  chainMaker,
};
