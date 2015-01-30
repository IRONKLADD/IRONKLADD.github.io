---
layout: post
category: resources
title: "Blog Guidelines"
author: dan
date: 2015-01-30T15:58:26-05:00
---

Here is a brief tutorial on how to make a blog post on this site.

Our blog is hosted on [Github Pages](pages.github.com), using the [Jekyll](jekyllrb.com) static site generator. Any static webpage can be hosted on github pages, though it will automatically build the site for you if you use Jekyll. The source code for the site is in the [IRONKLADD.github.io](https://github.com/IRONKLADD/IRONKLADD.github.io) repository. To make a new post, you will need to add it to that repository.

So first, clone the repository using `git`

{% highlight bash %}
git clone https://github.com/IRONKLADD/IRONKLADD.github.io.git
{% endhighlight %}

Then, save the post into `_posts/<category>/<yy-mm-dd>-<title>.markdown`,
where:

- `<category>` is one of the predefined categories we will agree to
  (this post is in the `resources` category)
- `<yy-mm-dd>` is the year, month, and date
- `<title>` is the title of your post, using only alphanumeric characters and
  hyphens (`-`)

Your post must be formatted in markdown, according to the [kramdown](http://kramdown.gettalong.org/syntax.html) standard, and have a [YAML front matter](http://jekyllrb.com/docs/frontmatter/) containing `layout: post`, `category: <your category>`, `title: <your title>`, `author: <your name>` (note: our names have been hard-coded into the blog as "kenny", "lu", "alex", "dan", and "dean". Don't write it any other way), and `date: <yyyy-mm-dd>T<hh:mm:ss>-05:00` (time must be given using 24-hour clock, `-05:00` specifies that it's the EST time zone).

Once you have made your post, add it, commit it, and push it to the `master` branch.

{% highlight bash %}
git add .
git commit -m "Made my first post"
git push origin master
{% endhighlight %}

For an example post, you can read the source for [this very post](https://github.com/IRONKLADD/IRONKLADD.github.io/tree/master/_posts/resources/2015-01-30-blog-guidelines.markdown).