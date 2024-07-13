document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
    var closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll(".gallery-item img").forEach(function(img) {
        img.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
        });
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
