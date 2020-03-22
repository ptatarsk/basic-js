module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 0;
        arr.forEach((el) => {
                if (Array.isArray(el)) {
                    let cur_depth = this.calculateDepth(el);
                    if (cur_depth > depth)
                        depth = cur_depth;
                }
            }
        );
        return ++depth;
    }
}