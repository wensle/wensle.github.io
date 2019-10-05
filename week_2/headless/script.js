$(document).ready(function() {
    butter.post.list({ page: 1, page_size: 10 }).then(function(response) {
        response.data.data.forEach(function(post, index) {
            console.log(post)
            $link_auteur = $("<a>", { "href": "#" })
                .append(`${post.author.first_name} ${post.author.last_name}`)
            $author = $("<p>", { "class": "lead" })
                .append("by ")
                .append($link_auteur)
            $body = $.parseHTML(post.body)
            console.log($body)
            $created = $("<p>", { "class": "" }).append(post.created)
            featured_image = post.featured_image
            seo_title = post.seo_title
            slug = post.slug
            status = post.status
            summary = post.summary
            tags = post.tags
            title = post.title
            url = post.url
            var $title = $("<h1>").append(title)
            $("#post-content")
                .append($title)
                .append($author)
                .append($created)
                .append($body)
            $("#post-content img").addClass("img-fluid")
            replace('img ', 'img class="fluid"')

        });
    })
});