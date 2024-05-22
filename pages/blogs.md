---
layout: default
title: "Blogs"
permalink: /blogs
---

{% assign blogs = site.data.blogs.blogs %}
{% assign sorted_blogs = blogs %}
<div class="mt-7 flex flex-col gap-5"> <div class="flex flex-col gap-1 sm:gap-2"> 

{% for blog in blogs %}
<a href="{{ blog.href }}" target="_self" class="group flex flex-col flex-wrap items-start text-balance text-lg font-medium text-white hover:text-blue-400 sm:flex-row sm:items-center">  <span class="mr-2 hidden h-1.5 w-1.5 bg-white transition-all group-hover:h-5 group-hover:bg-blue-400 sm:block"></span> <span class="mr-1.5 flex-shrink-0 underline decoration-2 underline-offset-2 transition-colors"> {{ blog.title }} </span> <span class="text-sm text-zinc-500 sm:text-lg font-normal">
({{ blog.date }})
</span> </a>
{% endfor %}
 </div> </div>
