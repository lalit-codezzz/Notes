const fetchGithubApiBtn = document.querySelector("#fetch-github-api-btn");

let count = 0;

async function fetchGithubApi() {
  try {
    const response = await fetch("https://api.github.com/users?since=135", {
      method: "GET",
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

function debounce(fn, delay) {
  let timer;
  let previousReject;

  return function () {
    clearTimeout(timer);
    if (typeof previousReject === "function") {
      previousReject();
    }
    return new Promise((resolve, reject) => {
      previousReject = reject;
      timer = setTimeout(async () => {
        try {
          const data = await fn();
          console.log(data);
          resolve(data);
        } catch (error) {
          reject(error);
        }
      }, delay);
    });
  };
}

fetchGithubApiBtn.addEventListener("click", () => {
    
})

const debouncedFetchGithubApi = debounce(fetchGithubApi, 500);
