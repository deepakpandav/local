const images = [
    "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/29146315/pexels-photo-29146315/free-photo-of-rustic-stone-pathway-in-autumn-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/18713680/pexels-photo-18713680/free-photo-of-footpath-in-forest-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/30738727/pexels-photo-30738727/free-photo-of-autumn-forest-path-with-vibrant-foliage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/19139094/pexels-photo-19139094/free-photo-of-pathway-in-an-autumn-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/19099018/pexels-photo-19099018/free-photo-of-mercedes-benz-r107-parked-on-roadside-under-autumn-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ]
  
  let currentIndex = 0
  
 
  function showSlide(index) {
    const mainImage = document.getElementById("main-image")
    const collage = document.getElementById("collage")
  
    
    mainImage.style.opacity = 0
    setTimeout(() => {
      mainImage.src = images[index]
      mainImage.style.opacity = 1
    }, 500)
  
   
    collage.innerHTML = ""
  
    for (let i = 1; i <= 9; i++) {
      let previewIndex = (index + i) % images.length
      let img = document.createElement("img")
      img.src = images[previewIndex]
      img.alt = `Preview ${i}`
      collage.appendChild(img)
    }
  }
  
  
  function startSlider() {
    showSlide(currentIndex)
    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length
      showSlide(currentIndex)
    }, 3000)
  }
  
  
  document.addEventListener("DOMContentLoaded", startSlider)
  