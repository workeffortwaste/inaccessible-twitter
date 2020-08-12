/* Inaccessible Twitter 1.0
 *
 * Bookmarklet
 * javascript:javascript:(function()%7Bconst%20style%3D'%3Cstyle%3E%5Cndiv%5Bdata-testid%3D%22tweetPhoto%22%5D%7B%5Cn%20%20%20%20margin%3A0!important%3B%5Cn%7D%5Cn%5Cndiv%5Bdata-testid%3D%22tweet%22%5D%20%3E%20div%3Alast-of-type%20*%20img%5Balt%3D%22%22%5D%20%7B%5Cn%20%20%20%20backdrop-filter%3A%20blur(20px)%3B%5Cn%20%20%20%20padding%3A%202px%3B%5Cn%7D%5Cn%5Cnvideo%5Baria-label%3D%22Embedded%20video%22%5D%20%7B%5Cn%20%20%20%20filter%3A%20blur(20px)%3B%5Cn%7D%5Cn%5Cndiv%5Bdata-testid%3D%22tweetPhoto%22%5D%20%3E%20div%3Alast-of-type%20*%20img%7B%5Cn%20%20%20%20object-fit%3A%20cover%3B%5Cn%20%20%20%20opacity%3A1%3B%5Cn%20%20%20%20filter%3Aunset%3B%5Cn%7D%5Cn%5Cndiv%5Bdata-testid%3D%22tweetPhoto%22%5D%20img%5Balt%3D%22Image%22%5D%7B%5Cn%20%20%20%20filter%3A%20blur(20px)%3B%5Cn%20%20%20%20backdrop-filter%3A%20blur(20px)%3B%5Cn%20%20%20%20opacity%3A1%3B%5Cn%20%20%20%20padding%3A%202px%3B%5Cn%7D%5Cn%5Cnvideo%5Baria-label%3D%22Embedded%20video%22%5D%3Aafter%7B%5Cn%20%20%20%20content%3Aunset%3B%5Cn%7D%5Cn%5Cndiv%5Bdata-testid%3D%22tweetPhoto%22%5D%3Aafter%7B%5Cn%20%20%20%20content%3A%20attr(aria-label)%3B%5Cn%20%20%20%20font-family%3A%20system-ui%2C%20-apple-system%2C%20BlinkMacSystemFont%2C%20%22Segoe%20UI%22%2C%20Roboto%2C%20Ubuntu%2C%20%22Helvetica%20Neue%22%2C%20sans-serif%3B%5Cn%20%20%20%20padding%3A%205px%2010px%3B%5Cn%20%20%20%20color%3A%20white%3B%5Cn%20%20%20%20background-color%3A%20black%3B%5Cn%20%20%20%20display%3A%20-webkit-box%3B%5Cn%20%20%20%20-webkit-line-clamp%3A%204%3B%5Cn%20%20%20%20-webkit-box-orient%3A%20vertical%3B%5Cn%20%20%20%20overflow%3A%20hidden%3B%5Cn%7D%5Cn%5Cndiv%5Baria-label%3D%22Image%22%5D%3Aafter%7B%5Cn%20%20%20%20content%3Aunset%3B%5Cn%7D%5Cn%5Cndiv%5Bdata-testid%3D%22tweet%22%5D%20%3E%20div%3Alast-of-type%20*%20span%5Bdir%3D%22auto%22%5D%20img%20%7B%5Cn%20%20%20%20filter%3A%20none%3B%5Cn%20%20%20%20backdrop-filter%3A%20none%3B%5Cn%20%20%20%20opacity%3A0%3B%5Cn%7D%5Cn%5Cndiv%5Bdata-testid%3D%22tweet%22%5D%20%3E%20div%3Alast-of-type%20*%20div%5Brole%3D%22blockquote%22%5D%20*%20div%5Brole%3D%22presentation%22%5D%20*%20img%3Afirst-of-type%20%7B%5Cn%20%20%20%20opacity%3A%201%3B%5Cn%20%20%20%20filter%3A%20blur(20px)%3B%5Cn%20%20%20%20border-radius%3A%2050%25%3B%5Cn%7D%5Cn%3C%2Fstyle%3E%5Cn'%3Bdocument.body.insertAdjacentHTML(%22beforeend%22%2Cstyle)%3B%7D)()%3B
 *
 */
(function () {
const style = `<style>
div[data-testid="tweetPhoto"]{
    margin:0!important;
}

div[data-testid="tweet"] > div:last-of-type * img[alt=""] {
    backdrop-filter: blur(20px);
    padding: 2px;
}

video[aria-label="Embedded video"] {
    filter: blur(20px);
}

div[data-testid="tweetPhoto"] > div:last-of-type * img{
    object-fit: cover;
    opacity:1;
    filter:unset;
}

div[data-testid="tweetPhoto"] img[alt="Image"]{
    filter: blur(20px);
    backdrop-filter: blur(20px);
    opacity:1;
    padding: 2px;
}

video[aria-label="Embedded video"]:after{
    content:unset;
}

div[data-testid="tweetPhoto"]:after{
    content: attr(aria-label);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
    padding: 5px 10px;
    color: white;
    background-color: black;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

div[aria-label="Image"]:after{
    content:unset;
}

div[data-testid="tweet"] > div:last-of-type * span[dir="auto"] img {
    filter: none;
    backdrop-filter: none;
    opacity:0;
}

div[data-testid="tweet"] > div:last-of-type * div[role="blockquote"] * div[role="presentation"] * img:first-of-type {
    opacity: 1;
    filter: blur(20px);
    border-radius: 50%;
}
</style>
`
    document.body.insertAdjacentHTML('beforeend', style)
})()
