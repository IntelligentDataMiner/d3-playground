function yp(obj) { 
  try {
    body.append('pre')
      .html(js_yaml.dump(obj));
  }
  catch (error) {
    body.append('pre')
      .style('color', 'red')
      .html(js_yaml.dump(error));
  }
}
data = {};
data.name = "A list of 10 numbers";
data.list = d3.range(10);
yp(data);