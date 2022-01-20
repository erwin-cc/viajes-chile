$(function(){
    $("#destacados .card").hover(
        function(){
            $(this).addClass("bg-hover")
        },
        function(){
            $(this).removeClass("bg-hover")
        }
    ); 
    
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

})