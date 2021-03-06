/**
 * Filter out rows or columns that all the values are outside [-maxValue, maxValue] range.
 *
 * @example
 * new jheatmap.filters.NonExpressed({ maxValue: 4 });
 *
 * @class
 * @param {number}  [maxValue=3]    Absolute maximum and minimum value
 */
jheatmap.filters.NonExpressed = function (options) {
    options = options || {};
    this.maxValue = options.maxValue || 3;
};

/**
 *@param {Array}   values  All the row or column values
 * @returns Returns 'false' if at least one value is inside (-maxValue, maxValue) range,
 * otherwise returns 'true'.
 */
jheatmap.filters.NonExpressed.prototype.filter = function (values) {
    for (var i = 0; i < values.length; i++) {
        if (Math.abs(parseFloat(values[i])) > this.maxValue) {
            return false;
        }
    }
    return true;
};