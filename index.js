const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

for (let i = 0; i < posts.length; i++) {
    let postAuthor = document.getElementById('post-author-' + i)
    postAuthor.textContent = posts[i].name
    let postAuthorLocation = document.getElementById('location-' + i)
    postAuthorLocation.textContent = posts[i].location
    let likeCount = document.getElementById('like-count-' + i)
    likeCount.textContent = posts[i].likes
    let username = document.getElementById('username-' + i)
    username.textContent = posts[i].username
    let postImage = document.getElementById('post-img-' + i)
    postImage.style.backgroundImage = "url(" + posts[i].post + ")"
    let avatar_post_image = document.getElementById('avtar-post-author-' + i)
    avatar_post_image.setAttribute('src', posts[i].avatar)
    let username_caption = document.getElementById("username-caption-" + i)
    username_caption.textContent = posts[i].comment
}

let likeCount1 = document.getElementById('like-count-0')
let likeCount2 = document.getElementById('like-count-1')
let likeCount3 = document.getElementById('like-count-2')

const postImage1 = document.getElementById('post-img-0')
const postImage2 = document.getElementById('post-img-1')
const postImage3 = document.getElementById('post-img-2')

const iconHeart1 = document.getElementById('icon-heart-0')
const iconHeart2 = document.getElementById('icon-heart-1')
const iconHeart3 = document.getElementById('icon-heart-2')


postImage1.addEventListener('dblclick', function () {
    incrementCount(likeCount1)
})

postImage2.addEventListener('dblclick', function () {
    incrementCount(likeCount2)
})

postImage3.addEventListener('dblclick', function () {
    incrementCount(likeCount3)
})

iconHeart1.addEventListener('dblclick', function () {
    incrementCount(likeCount1)
})

iconHeart2.addEventListener('dblclick', function () {
    incrementCount(likeCount2)
})

iconHeart3.addEventListener('dblclick', function () {
    incrementCount(likeCount3)
})

function incrementCount(element) {
    let count = Number(element.textContent.trim())
    count += 1
    element.textContent = count
}
