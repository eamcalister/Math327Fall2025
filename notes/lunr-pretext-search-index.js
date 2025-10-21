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
  "body": " Solution Technique 3: Some Numerical Methods  Numerical methods of solving ODEs give you approximate outputs of solutions to initial value problems for inputs of your choosing. Numerical methods are frequently used when no analytic method (e.g. separation of variables or integrating factors) works to find formulas for solutions.  The most basic numerical method is to approximately follow the slope field from the initial condition point.   Euler's Method  The value, of the solution to the IVP at the value is approximately   The following code executes a Python script for Euler's Method.  Euler's Method with Python    Euler's Method is effectively an implicit version of using a left-hand Riemann sum to solve an ODE. In fact, to evaluate for the IVP Euler's Method is exactly the left-hand Riemann sum for An improvement to Euler's Method, similarly based on the trapezoid rule, is given below.   Euler's Method  The value, of the solution to the IVP at the value is approximately where and     Improved Euler's Method with Python    A more advanced, but harder to justify, technique is known as the fourth-order Runge-Kutta (RK4) algorithm.   RK4 with Python    The order of a numerical method is the approximate exponent of the step size when evaluating the error from the exact value. That is, if we are trying to estimate for the ODE then we define the error to be  "
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
  "title": "Euler’s Method.",
  "body": " Euler's Method  The value, of the solution to the IVP at the value is approximately where and   "
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
  "body": "order error "
},
{
  "id": "linear-distinct-real",
  "level": "1",
  "url": "linear-distinct-real.html",
  "type": "Section",
  "number": "4",
  "title": "Solution Technique 4a: Linear Systems with Distinct Real Eigenvalues",
  "body": " Solution Technique 4a: Linear Systems with Distinct Real Eigenvalues  The eigenvalue method for solving a system IVP of the form where is a matrix relies on two initial facts (they scale up for general matrices).   The Superposition Theorem   If and are solutions to then so is the linear combination for any constants and .     (Sketch) This follows from the fact that the differential operator and matrix multiplication by are both linear.    Non-Parallel Initial Values Create a Fundamental Solution Set   If and are solutions to with and non-parallel (i.e. linearly independent), then the general solution to the system has the form That is, is a fundamental solution set.     (Sketch) Observe that every vector is a linear combination of and because they are non-parallel.    The Eigenvalue\/Eigenvector Method     Eigenvector Method with Real Distinct Eigenvalues  To solve proceed as follows:   Find the eigenpairs and . If and are real and distinct (not equal) proceed.    Form the general solution     Solve for and using the initial conditions.      To find eigenvalues and eigenvector, you can use this script:   Finding symbolic eigenvectors with Python     "
},
{
  "id": "superposition",
  "level": "2",
  "url": "linear-distinct-real.html#superposition",
  "type": "Theorem",
  "number": "4.1",
  "title": "The Superposition Theorem.",
  "body": " The Superposition Theorem   If and are solutions to then so is the linear combination for any constants and .   "
},
{
  "id": "linear-distinct-real-4",
  "level": "2",
  "url": "linear-distinct-real.html#linear-distinct-real-4",
  "type": "Proof",
  "number": "4.1",
  "title": "",
  "body": " (Sketch) This follows from the fact that the differential operator and matrix multiplication by are both linear.  "
},
{
  "id": "linear-independence",
  "level": "2",
  "url": "linear-distinct-real.html#linear-independence",
  "type": "Theorem",
  "number": "4.2",
  "title": "Non-Parallel Initial Values Create a Fundamental Solution Set.",
  "body": " Non-Parallel Initial Values Create a Fundamental Solution Set   If and are solutions to with and non-parallel (i.e. linearly independent), then the general solution to the system has the form That is, is a fundamental solution set.   "
},
{
  "id": "linear-distinct-real-6",
  "level": "2",
  "url": "linear-distinct-real.html#linear-distinct-real-6",
  "type": "Proof",
  "number": "4.2",
  "title": "",
  "body": " (Sketch) Observe that every vector is a linear combination of and because they are non-parallel.  "
},
{
  "id": "Real-Distinct",
  "level": "2",
  "url": "linear-distinct-real.html#Real-Distinct",
  "type": "Solution Method",
  "number": "4.3",
  "title": "Eigenvector Method with Real Distinct Eigenvalues.",
  "body": " Eigenvector Method with Real Distinct Eigenvalues  To solve proceed as follows:   Find the eigenpairs and . If and are real and distinct (not equal) proceed.    Form the general solution     Solve for and using the initial conditions.     "
},
{
  "id": "eigenvalue-method-one-5",
  "level": "2",
  "url": "linear-distinct-real.html#eigenvalue-method-one-5",
  "type": "Figure",
  "number": "4.4",
  "title": "",
  "body": " Finding symbolic eigenvectors with Python   "
},
{
  "id": "linear-complex",
  "level": "1",
  "url": "linear-complex.html",
  "type": "Section",
  "number": "5",
  "title": "Solution Technique 4b: Linear Systems with Complex Eigenvalues",
  "body": " Solution Technique 4b: Linear Systems with Complex Eigenvalues  The eigenvalue method for solving a system IVP of the form where is a matrix with complex eigenvalues begins the same way as with real eigenvalues: first, find the eigenpairs using the Sage Cell below (same as previous, but pre-loaded with a complex eigenvalue matrix).  Finding symbolic eigenvectors with Python   From there, we need two key facts.   Euler's Formula   The complex exponential is defined Using this definition, all properties of the exponential function that are relevant to differential equations are still true. Specifically, even if is complex.     (Sketch) This is really more of a well-motivated definition than a theorem. However, one can verify that the differentiation formula holds, assuming multiplication by factors through differentiation as with real numbers.    The Real and Imaginary Parts of a Solution to the System are Solutions Themselves   Let , where and are real-valued. That is, and . If is a solution to , then so are and .     (Sketch) Observe that and Since , we may equate real and imaginary parts of right-hand sides of the above equations to obtain the result.    The Eigenvalue\/Eigenvector Method     Eigenvector Method with Complex Eigenvalues  To solve when has complex eigenvalues, proceed as follows:   Pick one complex eigenpair, Using Euler's Formula, expand and group into real and imaginary parts. Let     Form the general solution     Solve for and using the initial conditions.       "
},
{
  "id": "linear-complex-2-4",
  "level": "2",
  "url": "linear-complex.html#linear-complex-2-4",
  "type": "Figure",
  "number": "5.1",
  "title": "",
  "body": " Finding symbolic eigenvectors with Python   "
},
{
  "id": "eulers-formula",
  "level": "2",
  "url": "linear-complex.html#eulers-formula",
  "type": "Theorem",
  "number": "5.2",
  "title": "Euler’s Formula.",
  "body": " Euler's Formula   The complex exponential is defined Using this definition, all properties of the exponential function that are relevant to differential equations are still true. Specifically, even if is complex.   "
},
{
  "id": "linear-complex-4",
  "level": "2",
  "url": "linear-complex.html#linear-complex-4",
  "type": "Proof",
  "number": "5.1",
  "title": "",
  "body": " (Sketch) This is really more of a well-motivated definition than a theorem. However, one can verify that the differentiation formula holds, assuming multiplication by factors through differentiation as with real numbers.  "
},
{
  "id": "Real-Imaginary-Parts",
  "level": "2",
  "url": "linear-complex.html#Real-Imaginary-Parts",
  "type": "Theorem",
  "number": "5.3",
  "title": "The Real and Imaginary Parts of a Solution to the System are Solutions Themselves.",
  "body": " The Real and Imaginary Parts of a Solution to the System are Solutions Themselves   Let , where and are real-valued. That is, and . If is a solution to , then so are and .   "
},
{
  "id": "linear-complex-6",
  "level": "2",
  "url": "linear-complex.html#linear-complex-6",
  "type": "Proof",
  "number": "5.2",
  "title": "",
  "body": " (Sketch) Observe that and Since , we may equate real and imaginary parts of right-hand sides of the above equations to obtain the result.  "
},
{
  "id": "complex-eigs",
  "level": "2",
  "url": "linear-complex.html#complex-eigs",
  "type": "Solution Method",
  "number": "5.4",
  "title": "Eigenvector Method with Complex Eigenvalues.",
  "body": " Eigenvector Method with Complex Eigenvalues  To solve when has complex eigenvalues, proceed as follows:   Pick one complex eigenpair, Using Euler's Formula, expand and group into real and imaginary parts. Let     Form the general solution     Solve for and using the initial conditions.     "
},
{
  "id": "linear-repeated",
  "level": "1",
  "url": "linear-repeated.html",
  "type": "Section",
  "number": "6",
  "title": "Solution Technique 4c: Linear Systems with Repeated Eigenvalues",
  "body": " Solution Technique 4c: Linear Systems with Repeated Eigenvalues  Sometimes you need to solve IVP of the form where is a matrix with only one eigenvalue and one linearly independent eigenvector. An example would be   Finding symbolic eigenvectors with Python   In such a case, you can't form two linearly independent solutions to build the generl solution. The most general solution we get is However, this system is partially decoupled and we can find the general solution It turns out all repeated eigenvalue systems have a general solution of this form, we just need to know how to find the vectors.   General Solution with a Repeated Eigenvalue   Consider the first-order system of ODEs given by where is a matrix with only one eigenvalue and one linearly independent eigenvector . Then the general solution to this system has the form where is a nonzero vector that satisfies .     First, observe that implies . Hence we have Thus, the second part of the hypothesized general solution is a solution to the system. Moreover, because and are not zero, the two solutions are linearly independent at . So, the generality of the solution follows.    The Eigenvalue\/Eigenvector Method     Eigenvector Method with Complex Eigenvalues  To solve when has a repeated eigenvalue, proceed as follows:   Find an eigenpair . Then find a nonzero vector satisfying , where is the identity matrix.    Form the general solution     Solve for and using the initial conditions.       "
},
{
  "id": "linear-repeated-2-5",
  "level": "2",
  "url": "linear-repeated.html#linear-repeated-2-5",
  "type": "Figure",
  "number": "6.1",
  "title": "",
  "body": " Finding symbolic eigenvectors with Python   "
},
{
  "id": "Repeated-Generalized",
  "level": "2",
  "url": "linear-repeated.html#Repeated-Generalized",
  "type": "Theorem",
  "number": "6.2",
  "title": "General Solution with a Repeated Eigenvalue.",
  "body": " General Solution with a Repeated Eigenvalue   Consider the first-order system of ODEs given by where is a matrix with only one eigenvalue and one linearly independent eigenvector . Then the general solution to this system has the form where is a nonzero vector that satisfies .   "
},
{
  "id": "linear-repeated-4",
  "level": "2",
  "url": "linear-repeated.html#linear-repeated-4",
  "type": "Proof",
  "number": "6.1",
  "title": "",
  "body": " First, observe that implies . Hence we have Thus, the second part of the hypothesized general solution is a solution to the system. Moreover, because and are not zero, the two solutions are linearly independent at . So, the generality of the solution follows.  "
},
{
  "id": "repeated-eigs",
  "level": "2",
  "url": "linear-repeated.html#repeated-eigs",
  "type": "Solution Method",
  "number": "6.3",
  "title": "Eigenvector Method with Complex Eigenvalues.",
  "body": " Eigenvector Method with Complex Eigenvalues  To solve when has a repeated eigenvalue, proceed as follows:   Find an eigenpair . Then find a nonzero vector satisfying , where is the identity matrix.    Form the general solution     Solve for and using the initial conditions.     "
},
{
  "id": "SecondOrderHomogeneous",
  "level": "1",
  "url": "SecondOrderHomogeneous.html",
  "type": "Section",
  "number": "7",
  "title": "Solution Technique 5: Linear Homogeneous Second-Order ODEs",
  "body": " Solution Technique 5: Linear Homogeneous Second-Order ODEs  This note tells us how to solve constant-coefficient linear second-order homogeneous ODEs.  Suppose we wish to solve   We know how to rewrite this equation as a system of two first-order equations (called the companion system to the second-order equation) by making the substitution and : We solve this system using the eigenvalue method. To do so, we solve Observe that the first entry of the matrix product implies , hence will be an eigenvector for any eigenvalue of this matrix. Now plugging and in the second equation, we get This is equivalent to which we may solve using the quadratic formula. This yields the following three possibilities:   Case I:  If , there are two distinct real eigenvalues , with corresponding eigenvectors and . Since the solution we are looking for is (and is simply ), we write the general solution as Since is the function we want, the general solution of the original equation is (The system solution is still useful for solving initial value problems.)    Case II:  If , there are two distinct complex eigenvalues. Remember that we can build the general solution out of only one eigenvalue, say , and its corresponding eigenvector. Since we only care about the first component , we can write The real-valued solution to the system is given by Thus, we obtain the general solution of the original equation :     Case III:  If , we have one real (repeated) eigenvalue . We can still build a fundamental set of solutions and get the general solution of the form: Thus, the general solution of the original equation is    "
},
{
  "id": "SecondOrderHomogeneous-4",
  "level": "2",
  "url": "SecondOrderHomogeneous.html#SecondOrderHomogeneous-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "companion system "
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
