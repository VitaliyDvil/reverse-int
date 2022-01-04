module.exports = function reverse(num) {
    const arr = num.toString().split('');
    arr.reverse();
    const newArr = arr.filter((item) => item !== '-');
    return newArr.join('');
}
