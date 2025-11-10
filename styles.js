var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.4",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "galFiltered Style",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-opacity" : 1.0,
      "text-opacity" : 1.0,
      "height" : 50.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "background-opacity" : 1.0,
      "font-size" : 12,
      "width" : 50.0,
      "color" : "rgb(51,51,51)",
      "shape" : "ellipse",
      "border-color" : "rgb(204,204,204)",
      "border-width" : 2.0,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "background-color" : "rgb(255,255,255)",
      "content" : "data(COMMON)"
    }
  }, {
    "selector" : "node[Degree > 18]",
    "css" : {
      "font-size" : 1
    }
  }, {
    "selector" : "node[Degree = 18]",
    "css" : {
      "font-size" : 40
    }
  }, {
    "selector" : "node[Degree > 1][Degree < 18]",
    "css" : {
      "font-size" : "mapData(Degree,1,18,10,40)"
    }
  }, {
    "selector" : "node[Degree = 1]",
    "css" : {
      "font-size" : 10
    }
  }, {
    "selector" : "node[Degree < 1]",
    "css" : {
      "font-size" : 1
    }
  }, {
    "selector" : "node[gal1RGexp > 2.058]",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "node[gal1RGexp = 2.058]",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "node[gal1RGexp > 0.00000012][gal1RGexp < 2.058]",
    "css" : {
      "background-color" : "mapData(gal1RGexp,0.00000012,2.058,rgb(255,255,255),rgb(255,255,0))"
    }
  }, {
    "selector" : "node[gal1RGexp > -2.426][gal1RGexp < 0.00000012]",
    "css" : {
      "background-color" : "mapData(gal1RGexp,-2.426,0.00000012,rgb(0,102,204),rgb(255,255,255))"
    }
  }, {
    "selector" : "node[gal1RGexp = -2.426]",
    "css" : {
      "background-color" : "rgb(0,102,204)"
    }
  }, {
    "selector" : "node[gal1RGexp < -2.426]",
    "css" : {
      "background-color" : "rgb(0,102,204)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "source-arrow-shape" : "none",
      "target-arrow-color" : "rgb(0,0,0)",
      "content" : "",
      "color" : "rgb(0,0,0)",
      "target-arrow-shape" : "none",
      "text-opacity" : 1.0,
      "line-style" : "solid",
      "line-color" : "rgb(153,153,153)",
      "source-arrow-color" : "rgb(0,0,0)",
      "opacity" : 0.6666666666666666,
      "width" : 2.0,
      "font-size" : 10
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]