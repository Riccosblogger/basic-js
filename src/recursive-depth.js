module.exports = class DepthCalculator {
    calculateDepth(arr,  depth=1) {
        //depth++;
        //alert (max_depth);      
        if (!Array.isArray(arr)) return;
        else for (let value of arr) {
            alert ('value=' + value + 'depth=' + depth);
            if (Array.isArray(value)) calculateDepth(value, ++depth); }
            return depth;	
        }
};