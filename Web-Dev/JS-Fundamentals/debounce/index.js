let count = 0

function debounce (fn) {
    let registered;
    
    return function () {
        // clearTimeout(registered);
        registered = setTimeout(fn, 500);
    }

}

function fetchData () {
    console.log("Fetching Data...", ++count);
}

const debouncedFetchData = debounce(fetchData);

