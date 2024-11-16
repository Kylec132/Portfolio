document.addEventListener("DOMContentLoaded", function() {
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById('posts');
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'post';

                const postTitle = document.createElement('h2');
                postTitle.className = 'post-title';
                postTitle.textContent = post.title;
                postElement.appendChild(postTitle);

                const postDate = document.createElement('div');
                postDate.className = 'post-date';
                postDate.textContent = post.date;
                postElement.appendChild(postDate);

                const postContent = document.createElement('div');
                postContent.className = 'post-content';
                postContent.textContent = post.content;
                postElement.appendChild(postContent);

                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
});
