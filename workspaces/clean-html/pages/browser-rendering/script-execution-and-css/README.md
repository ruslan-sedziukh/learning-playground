If we will uncomment `link` element for `styles-big` we will this that at the time when a script is executed CSSOM is partially completed based on styles that are placed in HTML before that script. Script execution will be delayed for this styles document to be loaded and parsed. 

In this case async styles will be loaded before script execution. But if we will comment `link` for `styles-big` we will see that async styles are not part of CSSOM at the moment of script execution.
