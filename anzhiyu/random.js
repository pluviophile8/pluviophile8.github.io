var posts=["2024/10/17/博客教程/","2025/01/14/Log4j2漏洞复现-Vulhub/","2024/11/07/SQL注入/","2024/11/01/IDM破解教程/","2024/10/28/文件上传漏洞/","2024/10/21/如何写一篇合格的漏洞报告/","2024/10/19/XSS 跨站脚本攻击/","2024/10/16/测试/","2024/10/16/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };