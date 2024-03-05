
-----
lazy load images in react using Intersection Observer(Akash Ingole youtube)
-----

Answer:- 
1. Intersection Observer is one of 3 observer based JavaScript APIs with the other two being Resize Observer and Mutation Observer. 
2. Intersection Observer in my opinion is the most useful because of how easy it makes things like infinite scrolling, lazing loading images, and scroll based animations.

3. Creating an Intersection Observer is actually quite simple since all you need to do is pass a function to the IntersectionObserver constructor.

const observer = new IntersectionObserver(entries => {
  console.log(entries)
})