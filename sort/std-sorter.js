class StdSorter {
  constructor(comp) {
    this.comp = comp;
  }

  sort(arr) {
    return arr.slice(0).sort(this.comp);
  }
}

module.exports = StdSorter;