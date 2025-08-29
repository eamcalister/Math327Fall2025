var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Erich McAlister Mathematics Department Fort Lewis College       "
},
{
  "id": "Activity-title",
  "level": "1",
  "url": "Activity-title.html",
  "type": "Worksheet",
  "number": "",
  "title": "Modeling Activity 1 - Introduction to Insightmaker",
  "body": " Modeling Activity 1 - Introduction to Insightmaker    This activity is to be done with a partner and is due Tuesday, September 2 on Canvas. Please make sure your final write-up is in ``final draft'' form. If you haven't already done this, go to and create an account. We will use this site (and other software) throughout the semester. You may also want to go to prior to class to help you figure out what is happening.      (The Mystery Insight) Go to and clone this Insight.     (2 points) When you click Simulate, what function is graphed?      (3 points) Change the initial value on the What am I? stock to something other than zero. Now what function is graphed when you simulate?      (3 points) Now click on the inflow = f flow into\/out of the stock. Based on the formula for this flow, what is the stock in relation to the flow? Tell me why this makes sense in terms of Calculus, and ``prove'' your answer by changing the flow function and showing the resulting simulation graph.      (2 points) What is the Mystery Insight model, expressed as a differential equation?       (5 points) (Build Your Own, Simple version) Now we would like to create an Insight to model Malthusian growth, i.e. exponential growth of a population given by the differential equation. We're going to do this together. When you submit your work, include the Insightmaker file (with a name different from the one on problem 3).  Here are some steps we'll take:   Create a primitive Stock, and call it , or whatever you think sounds good. Assign units to this stock.    We want to create a model in which we can vary the parameter . To do this, create a primitive Variable called . For this, you can create a slider so that you don't have to manually type in values. Also, give a reasonable range of values with a reasonable step-size.    Create a flow off of you stock. In order to have the flow rate involve the parameter , you need a link from to the flow. Create that, then give the formula for the flow.   Now simulate and see if the graph you get is what you expect. If it isn't we'll figure out what's wrong.        Now create an Insight to for the fish population with harvesting given in section 1.3 of the text (the differential equation is equation 1.3.6 in html version). Your Insight should have three parameters , , and . It should have two flows, one inflow for reproduction (involving ) and one outflow to account for resource limitations and harvesting (involving and ). Again, include the Insightmaker file for this exercise. {\\bf To receive full credit all primitives should have units.}   Sense making tip: Do a little algebra to get the differential equation to have isolated parts with obvious 's and 's and use in arrows for 's and out arrows for 's. Also, to receive full credit, your Insight must include units for all stocks, flows, and variables.     (5 points) Let , , , and . Run the simulation. Does the solution curve make sense, given the context of the model (What are and supposed to represent?)? Also, does the graph you get from Insightmaker approximately agree with the solution given by equation 1.3.7 (in html version) of the text (using the given parameters, graphed somewhere else, like Desmos)? Include screenshots of all your images in your submission and write sentences to explain.      (5 points) By varying values of (with the other parameters as above), how large can be before the fish population goes extinct eventually? Include screenshots in your write-up to support your claim.      "
},
{
  "id": "Activity-title-3-1",
  "level": "2",
  "url": "Activity-title.html#Activity-title-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  (The Mystery Insight) Go to and clone this Insight.     (2 points) When you click Simulate, what function is graphed?      (3 points) Change the initial value on the What am I? stock to something other than zero. Now what function is graphed when you simulate?      (3 points) Now click on the inflow = f flow into\/out of the stock. Based on the formula for this flow, what is the stock in relation to the flow? Tell me why this makes sense in terms of Calculus, and ``prove'' your answer by changing the flow function and showing the resulting simulation graph.      (2 points) What is the Mystery Insight model, expressed as a differential equation?    "
},
{
  "id": "Activity-title-3-2",
  "level": "2",
  "url": "Activity-title.html#Activity-title-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  (5 points) (Build Your Own, Simple version) Now we would like to create an Insight to model Malthusian growth, i.e. exponential growth of a population given by the differential equation. We're going to do this together. When you submit your work, include the Insightmaker file (with a name different from the one on problem 3).  Here are some steps we'll take:   Create a primitive Stock, and call it , or whatever you think sounds good. Assign units to this stock.    We want to create a model in which we can vary the parameter . To do this, create a primitive Variable called . For this, you can create a slider so that you don't have to manually type in values. Also, give a reasonable range of values with a reasonable step-size.    Create a flow off of you stock. In order to have the flow rate involve the parameter , you need a link from to the flow. Create that, then give the formula for the flow.   Now simulate and see if the graph you get is what you expect. If it isn't we'll figure out what's wrong.   "
},
{
  "id": "Activity-title-4-1",
  "level": "2",
  "url": "Activity-title.html#Activity-title-4-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Now create an Insight to for the fish population with harvesting given in section 1.3 of the text (the differential equation is equation 1.3.6 in html version). Your Insight should have three parameters , , and . It should have two flows, one inflow for reproduction (involving ) and one outflow to account for resource limitations and harvesting (involving and ). Again, include the Insightmaker file for this exercise. {\\bf To receive full credit all primitives should have units.}   Sense making tip: Do a little algebra to get the differential equation to have isolated parts with obvious 's and 's and use in arrows for 's and out arrows for 's. Also, to receive full credit, your Insight must include units for all stocks, flows, and variables.     (5 points) Let , , , and . Run the simulation. Does the solution curve make sense, given the context of the model (What are and supposed to represent?)? Also, does the graph you get from Insightmaker approximately agree with the solution given by equation 1.3.7 (in html version) of the text (using the given parameters, graphed somewhere else, like Desmos)? Include screenshots of all your images in your submission and write sentences to explain.      (5 points) By varying values of (with the other parameters as above), how large can be before the fish population goes extinct eventually? Include screenshots in your write-up to support your claim.    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
