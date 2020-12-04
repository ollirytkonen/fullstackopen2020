const dummy = (blogs) => {
   return 1
  }

  const totalLikes = (blogs) => {
   console.log(blogs)
   return [blogs].reduce(function(acc, val) { return acc + val; }, 0)
  }
  module.exports = {
    dummy,
    totalLikes
  }