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
YConsole.activate(); 
console.log("first intercepted log."); 
YConsole.docking="right"; 
YConsole.MAX_LOG_ARRAY_LENGTH=80; 
YConsole.MAX_LOG_STR_LENGTH=300; 
... 
YConsole.show(); 
```