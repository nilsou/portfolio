document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.video');
    
    videos.forEach(video => {
        video.addEventListener('mouseenter', function() {
            this.play();
        });
        
        video.addEventListener('mouseleave', function() {
            this.pause();
            this.currentTime = 0;
        });
        
        video.addEventListener('loadeddata', function() {
            this.currentTime = 0;
        });
    });
});