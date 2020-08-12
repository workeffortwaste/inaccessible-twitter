/* Inaccessible Twitter 1.0
 *
 * Bookmarklet
 * javascript:(function()%7Bconst style %3D %60<style>%0Adiv%5Bdata-testid%3D"tweetPhoto"%5D%7B%0A    margin%3A0!important%3B%0A%7D%0A%0Adiv%5Bdata-testid%3D"tweet"%5D > div%3Alast-of-type * img%5Balt%3D""%5D %7B%0A    backdrop-filter%3A blur(20px)%3B%0A    padding%3A 2px%3B%0A%7D%0A%0Avideo%5Baria-label%3D"Embedded video"%5D %7B%0A    filter%3A blur(20px)%3B%0A%7D%0A%0Adiv%5Bdata-testid%3D"tweetPhoto"%5D > div%3Alast-of-type * img%7B%0A    object-fit%3A cover%3B%0A    opacity%3A1%3B%0A    filter%3Aunset%3B%0A%7D%0A%0Adiv%5Bdata-testid%3D"tweetPhoto"%5D img%5Balt%3D"Image"%5D%7B%0A    filter%3A blur(20px)%3B%0A    backdrop-filter%3A blur(20px)%3B%0A    opacity%3A1%3B%0A    padding%3A 2px%3B%0A%7D%0A%0Avideo%5Baria-label%3D"Embedded video"%5D%3Aafter%7B%0A    content%3Aunset%3B%0A%7D%0A%0Adiv%5Bdata-testid%3D"tweetPhoto"%5D%3Aafter%7B%0A    content%3A attr(aria-label)%3B%0A    font-family%3A system-ui%2C -apple-system%2C BlinkMacSystemFont%2C "Segoe UI"%2C Roboto%2C Ubuntu%2C "Helvetica Neue"%2C sans-serif%3B%0A    padding%3A 5px 10px%3B%0A    color%3A white%3B%0A    background-color%3A black%3B%0A    display%3A -webkit-box%3B%0A    -webkit-line-clamp%3A 4%3B%0A    -webkit-box-orient%3A vertical%3B%0A    overflow%3A hidden%3B%0A%7D%0A%0Adiv%5Baria-label%3D"Image"%5D%3Aafter%7B%0A    content%3Aunset%3B%0A%7D%0A%0Adiv%5Bdata-testid%3D"tweet"%5D > div%3Alast-of-type * span%5Bdir%3D"auto"%5D img %7B%0A    filter%3A none%3B%0A    backdrop-filter%3A none%3B%0A    opacity%3A0%3B%0A%7D%0A%0Adiv%5Bdata-testid%3D"tweet"%5D > div%3Alast-of-type * div%5Brole%3D"blockquote"%5D * div%5Brole%3D"presentation"%5D * img%3Afirst-of-type %7B%0A    opacity%3A 1%3B%0A    filter%3A blur(20px)%3B%0A    border-radius%3A 50%25%3B%0A%7D%0A<%2Fstyle>%0A%60%0A    document.body.insertAdjacentHTML('beforeend'%2C style)%7D)()%3B
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
