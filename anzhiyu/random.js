var posts=["2024/10/17/博客教程/","2024/10/19/XSS 跨站脚本攻击/","2024/10/16/测试/","2024/10/16/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };