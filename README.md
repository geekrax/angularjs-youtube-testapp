Pocket Youtube
===========================
You love YouTube videos, and over the years you've been collecting their URLs in a text file.
The problem is that now you don't know what any of them actually are!

You decide to build a single-page AngularJS app that:

1. Given a YouTube URL (ie: [http://www.youtube.com/watch?v=uFTFsKmkQnQ](http://www.youtube.com/watch?v=uFTFsKmkQnQ))
2. Get the metadata using YouTube API,
3. Append the video metadata to a list on the page.
4. Save the list of videos to LocalStorage and fetch them when you reload the page.

Each video in the list should show:

* Title of the video
* Who posted it to YouTube
* Date it was posted
* Thumbnail
* How many views and likes the video has