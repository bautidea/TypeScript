// Lets see how can we debug our application, its useful when things go wrong and
// the code isnt working as expected, we can run our code line by line and see what is wrong.
// There is a few steps to follow:

// 1. First we go to TS config file --> 'tsconfig.json'
//      In the 'Emit' section we enable 'sourceMap' option. sourceMap is a file that specifies how each line
//      of the TS code match to the generated JS code.
//      When compiling a new file '.map' will be generated. It will contain some code that specifies how our TS
//      code maps to our JS code. It wont have much sense what is in it becuase its for debuggers.

// 2. We select the line we want to evalueate as a break point (red dot in VScode when clicking line number).
// when we start debugging the execution will stop at the breakpoint line, from this line foward we can execute the code
// line by line.

// 3. We go to the debugpannel in VSCode, and click on 'create a launch.json file', then select Node.js.
// This will create a new file called 'launch.json' in our project. This will tell vscode how to debug the application.

// 4. in the created file we have to add one more setting, called 'preLaunchTask', and we will set it a value
// "preLaunchTask" : "tsc: build - tsconfig.json"
// With this setting we are telling VSCode to use the TS compiler to build our app, using out configuration file.

// 5. To start debugging we can go to the debug pannel, and click on 'Launch Program'.
// The progam will start and the execution will stop at the breakpoint. On the top we will see a bounch of tools for
// executing our code.
//      - Continue.
//      - Step Over: For executing one line.
//      - Step into: For steping into a funciton.
//      - Step out: Useful for stepping out to level function.
//      - Restart.
//      - Stop.
