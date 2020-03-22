const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (isNaN(position) || position < 1 || position >= this.chain.length) {
      this.chain = [];
      throw new Error();
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },

  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },

  finishChain() {
    let res = [];

    this.chain.map((el) => {
      res.push(`( ${el} )`);
    });
    this.chain = [];
    return res.join('~~');
  }
};

module.exports = chainMaker;
