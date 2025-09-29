var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "first-order-linear",
  "level": "1",
  "url": "first-order-linear.html",
  "type": "Section",
  "number": "1",
  "title": "Solution Technique 1: First Order Linear ODEs",
  "body": " Solution Technique 1: First Order Linear ODEs  This note gives two useful techniques for solving first-order linear ODEs.   First-Order Linear ODE (most of Definition 2.1.1 in Text)   A first-order ODE that can be written in the form for some functions and is called linear . If , then the linear ODE is homogeneous .     The Integrating Factor Method  The following method will always work to find solutions to linear first-order ODEs. The only potential problem with it is finding antiderivatives. Because of the name of the function in this method, it is called the integrating factor method .   Solving with an Integrating Factor  To solve , proceed as follows:   Re-write the equation in the form     Compute the integrating factor (the integral in the exponent can me taken with constant of integration equal to zero). Observe that .    Multiply both sides of the re-written ODE by to obtain Note that, by the observation in the previous step, the left-hand side of this equation is Thus, the ODE takes the form     Integrate both sides of the last equation to get rid of the , then solve for . Apply whatever initial conditions you may have to solve for the unknown constant in your solution.        The Method  Another useful, but less flexible, method relies on the following theorem.   Form of Solutions to First-Order Linear ODEs   The general solution to the ODE is where is the general solution to the homogeneous first-order ODE and is any particular solution to you may be able to find.     Let be an arbitrary solution to . Consider the difference . Observe that Hence, is a solution to , which means has the form indicated by the theorem.    The Method  To solve , proceed as follows:   Observe that , where is an arbitrary constant.    Figure out a single solution to .    Form the general solution as indicated by the theorem and apply any initial conditions to solve for .        The technique is extremely useful when a particular solution can be found by inspection. For instance, when an equilibrium or steady-state solution is evident.   In cases when is from a familiar family of functions, one can often determine a particular solution to by \"guessing\" a general function with the same form as , plugging the general function into , and solving for the relevant parameters. This can also be called the Guess and Mate it Happen method.    The Method of Undetermined Coefficients  To solve , proceed as follows:   Observe that , where is an arbitrary constant.    Guess a generic function in the same family as for . For instance,   if is linear, guess ,    if is quadratic, guess     if is exponential, guess an exponential with the same growth rate,    etc.       Plug your guess function into and solve the resulting system of equations for any unknow parameters.    Form the general solution as indicated by the theorem and apply any initial conditions to solve for .       "
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
  "body": "  The technique is extremely useful when a particular solution can be found by inspection. For instance, when an equilibrium or steady-state solution is evident.   In cases when is from a familiar family of functions, one can often determine a particular solution to by \"guessing\" a general function with the same form as , plugging the general function into , and solving for the relevant parameters. This can also be called the Guess and Mate it Happen method.  "
},
{
  "id": "undetermined-coefficients",
  "level": "2",
  "url": "first-order-linear.html#undetermined-coefficients",
  "type": "Solution Method",
  "number": "1.6",
  "title": "The Method of Undetermined Coefficients.",
  "body": " The Method of Undetermined Coefficients  To solve , proceed as follows:   Observe that , where is an arbitrary constant.    Guess a generic function in the same family as for . For instance,   if is linear, guess ,    if is quadratic, guess     if is exponential, guess an exponential with the same growth rate,    etc.       Plug your guess function into and solve the resulting system of equations for any unknow parameters.    Form the general solution as indicated by the theorem and apply any initial conditions to solve for .     "
},
{
  "id": "separable",
  "level": "1",
  "url": "separable.html",
  "type": "Section",
  "number": "2",
  "title": "Solution Technique 2: Separable First-Order ODEs",
  "body": " Solution Technique 2: Separable First-Order ODEs  This note gives one of the few techniques for solving some non-linear ODEs.   Separable First-Order ODE (Definition 2.2.1 in Text)   A first-order ODE that can be written in the form for some functions and is called separable .     The Separation of Variables Method  The following method can be used to solve separable ODEs, at least in principle. The ability to perform the necessary integrations and\/or do algebra for an explicit expression for will always be an issue (they're not always possible).   Note: Separation of variables also refers to an important technique for solving partial differential equations using Fourier series. This isn't what we're doing.   Solving with an Integrating Factor  To solve , proceed as follows:   Separate:     Integrate: Observe that you are really doing a \" \" substitution on the left-hand side. The integral is really with respect to .  This will get you an equation of the form where is some antiderivative of and is an antiderivative of .    Do algebra to solve for and\/or apply initial conditions to determine . At this point the technique depends on that specific functions you're dealing with.       "
},
{
  "id": "def-first-order-separable",
  "level": "2",
  "url": "separable.html#def-first-order-separable",
  "type": "Definition",
  "number": "2.1",
  "title": "Separable First-Order ODE (Definition 2.2.1 in Text).",
  "body": " Separable First-Order ODE (Definition 2.2.1 in Text)   A first-order ODE that can be written in the form for some functions and is called separable .   "
},
{
  "id": "sep-var-method",
  "level": "2",
  "url": "separable.html#sep-var-method",
  "type": "Solution Method",
  "number": "2.2",
  "title": "Solving with an Integrating Factor.",
  "body": " Solving with an Integrating Factor  To solve , proceed as follows:   Separate:     Integrate: Observe that you are really doing a \" \" substitution on the left-hand side. The integral is really with respect to .  This will get you an equation of the form where is some antiderivative of and is an antiderivative of .    Do algebra to solve for and\/or apply initial conditions to determine . At this point the technique depends on that specific functions you're dealing with.     "
},
{
  "id": "numerical-methods",
  "level": "1",
  "url": "numerical-methods.html",
  "type": "Section",
  "number": "3",
  "title": "Solution Technique 3: Some Numerical Methods",
  "body": " Solution Technique 3: Some Numerical Methods  Numerical methods of solving ODEs give you approximate outputs of solutions to initial value problems for inputs of your choosing. Numerical methods are frequently used when no analytic method (e.g. separation of variables or integrating factors) works to find formulas for solutions.  The most basic numerical method is to approximately follow the slope field from the initial condition point.   Euler's Method  The value, of the solution to the IVP at the value is approximately   The following code executes a Python script for Euler's Method.  Euler's Method with Python    Euler's Method is effectively an implicit version of using a left-hand Riemann sum to solve an ODE. In fact, to evaluate for the IVP Euler's Method is exactly the left-hand Riemann sum for An improvement to Euler's Method, similarly based on the trapezoid rule, is given below.   Improved Euler's Method  The value, of the solution to the IVP at the value is approximately where and     Improved Euler's Method with Python    A more advanced, but harder to justify, technique is known as the fourth-order Runge-Kutta (RK4) algorithm.   RK4 with Python    The order of a numerical method is the approximate exponent of the step size when evaluating the error from the exact value. That is, if we are trying to estimate for the ODE then we define the error at to be If an approximation is -th order, then for some constant , which depends of the ODE and the numerical method being used.  Euler's Method is a first order method, Improved Euler's is second, and (surprise!) RK4 is a fourth order method.  "
},
{
  "id": "eulers-method",
  "level": "2",
  "url": "numerical-methods.html#eulers-method",
  "type": "Solution Method",
  "number": "3.1",
  "title": "Euler’s Method.",
  "body": " Euler's Method  The value, of the solution to the IVP at the value is approximately   "
},
{
  "id": "numerical-methods-5",
  "level": "2",
  "url": "numerical-methods.html#numerical-methods-5",
  "type": "Figure",
  "number": "3.2",
  "title": "",
  "body": " Euler's Method with Python   "
},
{
  "id": "improved-eulers-method",
  "level": "2",
  "url": "numerical-methods.html#improved-eulers-method",
  "type": "Solution Method",
  "number": "3.3",
  "title": "Improved Euler’s Method.",
  "body": " Improved Euler's Method  The value, of the solution to the IVP at the value is approximately where and   "
},
{
  "id": "numerical-methods-8",
  "level": "2",
  "url": "numerical-methods.html#numerical-methods-8",
  "type": "Figure",
  "number": "3.4",
  "title": "",
  "body": " Improved Euler's Method with Python   "
},
{
  "id": "numerical-methods-9",
  "level": "2",
  "url": "numerical-methods.html#numerical-methods-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "fourth-order Runge-Kutta (RK4) "
},
{
  "id": "numerical-methods-10",
  "level": "2",
  "url": "numerical-methods.html#numerical-methods-10",
  "type": "Figure",
  "number": "3.5",
  "title": "",
  "body": " RK4 with Python   "
},
{
  "id": "numerical-methods-11",
  "level": "2",
  "url": "numerical-methods.html#numerical-methods-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "order error at "
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
