 
document.addEventListener("DOMContentLoaded", function () {
     
    const goBackButtons = document.querySelectorAll('.go-back-btn');

    goBackButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            window.history.back();
        });
    });
 
    const tableRows = document.querySelectorAll("table tr");
    tableRows.forEach(row => {
        row.addEventListener("mouseover", () => {
            row.style.backgroundColor = "#f0f8ff";
        });
        row.addEventListener("mouseout", () => {
            row.style.backgroundColor = "";
        });
    });

     
    const scrollBtn = document.getElementById("scrollTopBtn");
    if (scrollBtn) {
        scrollBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
