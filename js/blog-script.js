const posts = document.querySelectorAll('.blog-post');

posts.forEach(post => {
  post.addEventListener('click', function () {
    const isActive = this.classList.contains('active');

    if (!isActive) {
      posts.forEach(p => p.classList.remove('active'));
      this.classList.add('active');
      document.body.classList.add('active');
    }

    document.addEventListener('click', (e) => {
      if (!e.composedPath().includes(post)) {
        post.classList.remove('active');
        document.body.classList.remove('active'); // to open the damn scroll
      }
    });
  });
});

if (location.hash) {
  const foundBlog = document.getElementById(location.hash.substr(1))

  if (foundBlog) {
    foundBlog.classList.add('active')
  }
}
