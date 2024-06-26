const bodyForLazy = document.getElementsByTagName("BODY");
$(bodyForLazy).on("mouseover keydown touchstart wheel", function() {
    $(this).off("mouseover keydown touchstart wheel"),
    lazySizes.init()
}),
document.addEventListener("DOMContentLoaded", function() {
    var e = [].slice.call(document.querySelectorAll(".lazy-background"));
    if ("IntersectionObserver"in window && "IntersectionObserverEntry"in window && "intersectionRatio"in window.IntersectionObserverEntry.prototype) {
        let t = new IntersectionObserver(function(e, n) {
            e.forEach(function(e) {
                e.isIntersecting && (e.target.classList.add("visible"),
                t.unobserve(e.target))
            })
        }
        );
        e.forEach(function(e) {
            t.observe(e)
        })
    }
});
