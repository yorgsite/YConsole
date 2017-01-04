# YConsole

**YConsole.js** has been made to make js debugging easier under mobile with the lowest impact possible on local code (no dependencies), exept for '**.YConsole_**' as a reserved css class name prefix and of course '**YConsole**' as a reserved js var.

* Simple to use.
* Catch logs and errors.
* Object Editor.

## Getting Started

How to use :
```
<script type="text/javascript" src="js/YConsole.min.js"></script> 
<script type="text/javascript" >YConsole.show();</script> 
```

Advanced use exemple :
```
YConsole.activate(); // start log an errors interception
console.log("first intercepted log."); 
YConsole.docking="right"; // console docking
YConsole.SPLITTER_WIDTH=20;// pannel split size
YConsole.TOOLS_SIZE=30;// tool button size
YConsole.SWITCHER_SIZE=30;// switch button size
... 
YConsole.show(); // show console
```