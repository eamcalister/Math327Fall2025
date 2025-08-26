var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "first-order-linear",
  "level": "1",
  "url": "first-order-linear.html",
  "type": "Section",
  "number": "1",
  "title": "Solution Technique 1: First Order Linear ODEs",
  "body": " Solution Technique 1: First Order Linear ODEs  This note gives two useful techniques for solving first-order linear ODEs.   First-Order Linear ODE (most of Definition 2.1.1 in Text)   A first-order ODE that can be written in the form for some functions and is called linear . If , then the linear ODE is homogeneous .     The Integrating Factor Method  The following method will always work to find solutions to linear first-order ODEs. The only potential problem with it is finding antiderivatives. Because of the name of the function in this method, it is called the integrating factor method .   Solving with an Integrating Factor  To solve , proceed as follows:   Re-write the equation in the form     Compute the integrating factor (the integral in the exponent can me taken with constant of integration equal to zero). Observe that .    Multiply both sides of the re-written ODE by to obtain Note that, by the observation in the previous step, the left-hand side of this equation is Thus, the ODE takes the form     Integrate both sides of the last equation to get rid of the , then solve for . Apply whatever initial conditions you may have to solve for the unknown constant in your solution.        The Method  Another useful, but less flexible, method relies on the following theorem.   Form of Solutions to First-Order Linear ODEs   The general solution to the ODE is where is the general solution to the homogeneous first-order ODE and is any particular solution to you may be able to find.     Let be an arbitrary solution to . Consider the difference . Observe that Hence, is a solution to , which means has the form indicated by the theorem.    The Method  To solve , proceed as follows:   Observe that , where is an arbitrary constant.    Figure out a single solution to .    Form the general solution as indicated by the theorem and apply any initial conditions to solve for .        The technique is extremely useful when a particular solution can be found by inspection. For instance, when an equilibrium or steady-state solution is evident.     "
},
{
  "id": "def-first-order-linear",
  "level": "2",
  "url": "first-order-linear.html#def-first-order-linear",
  "type": "Definition",
  "number": "1.1",
  "title": "First-Order Linear ODE (most of Definition 2.1.1 in Text).",
  "body": " First-Order Linear ODE (most of Definition 2.1.1 in Text)   A first-order ODE that can be written in the form for some functions and is called linear . If , then the linear ODE is homogeneous .   "
},
{
  "id": "integrating-factors-2",
  "level": "2",
  "url": "first-order-linear.html#integrating-factors-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integrating factor method "
},
{
  "id": "int-factor-method",
  "level": "2",
  "url": "first-order-linear.html#int-factor-method",
  "type": "Solution Method",
  "number": "1.2",
  "title": "Solving with an Integrating Factor.",
  "body": " Solving with an Integrating Factor  To solve , proceed as follows:   Re-write the equation in the form     Compute the integrating factor (the integral in the exponent can me taken with constant of integration equal to zero). Observe that .    Multiply both sides of the re-written ODE by to obtain Note that, by the observation in the previous step, the left-hand side of this equation is Thus, the ODE takes the form     Integrate both sides of the last equation to get rid of the , then solve for . Apply whatever initial conditions you may have to solve for the unknown constant in your solution.     "
},
{
  "id": "first-order-linear-solutions",
  "level": "2",
  "url": "first-order-linear.html#first-order-linear-solutions",
  "type": "Theorem",
  "number": "1.3",
  "title": "Form of Solutions to First-Order Linear ODEs.",
  "body": " Form of Solutions to First-Order Linear ODEs   The general solution to the ODE is where is the general solution to the homogeneous first-order ODE and is any particular solution to you may be able to find.   "
},
{
  "id": "up_plus_uh-4",
  "level": "2",
  "url": "first-order-linear.html#up_plus_uh-4",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Let be an arbitrary solution to . Consider the difference . Observe that Hence, is a solution to , which means has the form indicated by the theorem.  "
},
{
  "id": "u_p-u_h-method",
  "level": "2",
  "url": "first-order-linear.html#u_p-u_h-method",
  "type": "Solution Method",
  "number": "1.4",
  "title": "The <span class=\"process-math\">\\(u_p + u_h\\)<\/span> Method.",
  "body": " The Method  To solve , proceed as follows:   Observe that , where is an arbitrary constant.    Figure out a single solution to .    Form the general solution as indicated by the theorem and apply any initial conditions to solve for .     "
},
{
  "id": "up_plus_uh-6",
  "level": "2",
  "url": "first-order-linear.html#up_plus_uh-6",
  "type": "Remark",
  "number": "1.5",
  "title": "",
  "body": "  The technique is extremely useful when a particular solution can be found by inspection. For instance, when an equilibrium or steady-state solution is evident.   "
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
