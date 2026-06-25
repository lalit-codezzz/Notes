const arr = [[1, 25, [5, 2, [44, 56] ], 4], [2, 4, 3, 9]];

function helper(arr) {
    
    if (Array.isArray(arr)) {
        let res = [];
        for (let j = 0; j < arr.length; ++j) {
            const a = helper(arr[j]);
            res = [...res,...a];
        }
        return res;
        
    }
    return [arr];
}

function flatt() {
    const flatted = helper(this);
    return flatted;
}

Array.prototype.flatt = flatt;

const flatted = arr.flatt();

console.log(flatted);