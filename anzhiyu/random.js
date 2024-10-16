var posts=["2024/10/16/测试/","2024/10/16/hello/","2024/10/16/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };