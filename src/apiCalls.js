export function fetchArticles() {
    return fetch('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=4b47e5b6e75244ce97ed0fc9e88548e4')
    .then(res => res.json)
    .catch(err => console.log(err))
}