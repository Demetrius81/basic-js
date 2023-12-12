const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {
    return this.chain?.length;
  },
  addLink(value) {
    if (!this.chain) {
      this.chain = [];
    }
    this.chain.push(
      `( ${value === undefined ? '' : value} )`.replace('{}', '{ }')
    );
    return this;
  },
  removeLink(position) {
    if (position > this.chain?.length || position <= 0 || isNaN(+position)) {
      throw new Error(`You can\'t remove incorrect link!`);
    }
    this.chain?.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain?.reverse();
    return this;
  },
  finishChain() {
    return this.chain?.join('~~');
  },
};

module.exports = {
  chainMaker,
};
