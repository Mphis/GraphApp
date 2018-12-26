var g = new Graph();

var renderer;
var layouter;
var newnode;
window.onload = function() {

window.height = 600;
window.width = 1000;

g.addEdge("cherry", "apple");
g.addEdge("cherry", "strawberry");
g.addEdge("strawberry", "kiwi");
g.addEdge("banana", "kiwi");

g.addNode('id34', { label: 'Tomato' });
g.addEdge('id34', 'cherry', { directed : true } );

/* layout the graph using the Spring layout implementation */
layouter = new Graph.Layout.Spring(g);
layouter.layout();

/* draw the graph using the RaphaelJS draw implementation */
renderer = new Graph.Renderer.Raphael('canvas', g, (window.innerWidth* 8/12), window.innerHeight);
renderer.draw();


//adding new nodes
document.getElementById("addnodes").onclick = function() {newNode()};

function newNode() {
    var nodename = document.getElementById("nodename").value;
    g.addNode(nodename, { label: nodename });
    renderer.draw();
}


//adding new edges
document.getElementById("addedges").onclick = function() {newEdge()};

function newEdge() {
    var node1 = document.getElementById("node1").value;
    var node2 = document.getElementById("node2").value;
    g.addEdge(node1, node2, { directed : true } );
    renderer.draw();
}

document.getElementById("clear").onclick = function() {clearCanvas()};
function clearCanvas() {
    var div = document.getElementById('canvas');
    while(div.firstChild){
      div.removeChild(div.firstChild);
    }
    g = null;
    g = new Graph();

    layouter = new Graph.Layout.Spring(g);
    layouter.layout();
    renderer = new Graph.Renderer.Raphael('canvas', g, window.innerWidth, window.innerHeight);
    renderer.draw();
}


};

