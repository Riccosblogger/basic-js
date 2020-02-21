const chainMaker = {
  chain: [],
  temp: '',
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) this.chain.push('( )~~');
		  else this.chain.push('( ' + String(value) + ' )~~');
    return this;
  },
  removeLink(position) {
      if ((position<1) || (position>this.chain.length) || (Math.round(position) != position)) {this.chain = []; throw new Error();}
      else this.chain.splice(position-1, 1);
      return this;
  },// 
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.temp = this.chain.join('').slice(0, -2);
    this.chain = [];
    return this.temp;
  }
};

module.exports = chainMaker;
