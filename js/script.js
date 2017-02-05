$(document).ready(function () {
    var tags = ["maga", "tbt", "mcm"];
    var spheres = d3.select("a-scene").selectAll(".hashtag-sphere").data(tags);
    spheres.enter()
        .append("a-sphere")
        .classed("hashtag-sphere", true)
        .attr("position", function(d, i) {
            return "0 " + "1 " + i;
        })
        .attr('radius', 1.25)
        .attr('color', '#0000FF');
});