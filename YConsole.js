

/* ------------------------------- YConsole.css [ ------------------------------- */

(function(){var _dom_ = document.createElement('style');_dom_.appendChild(document.createTextNode( "\n.YConsole_left_pan{position:fixed;\ntransition:margin 0.5s ease;z-index:1000000000;}\n.YConsole_left_pan_switch{position:fixed;\ntext-align:left;color:#FFF;font-family:Arial;font-size:18px;\ntext-shadow:-2px 0px 2px #FF0000,-1px 0px 2px #C04080,0px 0px 2px #8080FF,\n1px 0px 2px #40C0FF,2px 0px 2px #00FFFF;opacity:0.5;\ncursor:pointer;z-index:1000000001;}\n.YConsole_left_pan_resize{position:fixed;text-align:center;color:#FFF;background-color:#000;}\n.YConsole_left_pan__dock_left{left:0px;top:0px;}\n.YConsole_left_pan__dock_right{right:0px;top:0px;}\n.YConsole_left_pan__dock_top{left:0px;top:0px;}\n.YConsole_left_pan__dock_bottom{left:0px;bottom:0px;}\n.YConsole_left_pan_switch__dock_left{left:0px;top:0px;}\n.YConsole_left_pan_switch__dock_right{right:0px;top:0px;}\n.YConsole_left_pan_switch__dock_top{right:20px;top:5px;}\n.YConsole_left_pan_switch__dock_bottom{right:20px;bottom:5px;}\n.YConsole_left_pan_resize__dock_left{cursor:ew-resize;}\n.YConsole_left_pan_resize__dock_right{cursor:ew-resize;}\n.YConsole_left_pan_resize__dock_top{cursor:ns-resize;}\n.YConsole_left_pan_resize__dock_bottom{cursor:ns-resize;}\n.YConsole_konsol_selector{display:inline-block;}\n.YConsole_konsol_selector_value{display:inline-block;cursor:pointer;background-color:#444;margin:0px 3px;padding:1px 3px;border-radius:10px;}\n.YConsole_konsol_selector_value:hover{background-color:#666;}\n.YConsole_konsol_selector_childs{display:block;position:absolute;border:solid 1px #000;background-color:#eee;box-shadow:3px 2px 5px #888;}\n.YConsole_konsol_selector_option{display:block;color:#000;background-color:#fff;padding:0px 2px;margin:2px 2px;cursor:pointer;}\n.YConsole_konsol_selector_option:hover{color:#fff;background-color:#000;}\n.YConsole_konsol_help{position:absolute;left:0px;top:0px;background-color:#FFF;width:100%;overflow:auto;font-family:Arial, Helvetica, sans-serif;font-size:16px;}\n.YConsole_konsol_help div{margin:3px;padding:3px;}\n.YConsole_konsol_help div div{margin:0px 8px;padding:6px 8px;border:solid 1px #CCC;}\n.YConsole_konsol_help div div div{padding:3px 8px;border:none;background-color:#eee;}\n.YConsole_konsol_help_exit{position:absolute;right:20px;top:10px;padding:0px 6px;font-family:\"Arial Black\", Gadget, sans-serif;font-size:24px;color:#FFF;background-color:rgba(0,0,255,0.5);border-radius:4px;cursor:pointer;}\n.YConsole_konsol{border:solid 1px #000;font-family:Arial;}\n.YConsole_konsol_tools{color:#fff;background-color:#666;padding-bottom:1px;}\n.YConsole_konsol_tools img {vertical-align: middle;}\n.YConsole_konsol_tools a{display:inline-block;text-align:center;\nbackground-color:#777;cursor:pointer;}\n.YConsole_konsol_help .YConsole_konsol_tools a{padding:0px 3px;}\n.YConsole_konsol_tools a:hover{background-color:transparent;}\n.YConsole_konsol_tools span span{cursor:pointer;}\n.YConsole_konsol_list{background-color:#AAA;\noverflow:auto;user-select: initial;}\n.YConsole_konsol_split{background-color:#444;cursor:ns-resize;}\n.YConsole_konsol_counter{display:inline-block;padding:0px 5px;color:#FFF;background-color:#063;border-radius:10px;margin-left:5px;}\n.YConsole_konsol_line{font-family:monospace;font-size:14px;border-bottom:solid 1px #000;}\n.YConsole_konsol_showstack{}\n.YConsole_konsol_msg{background-color:#fff;}\n.YConsole_konsol_msg_u_undefined{}\n.YConsole_konsol_msg_u_number{color:#F00;}\n.YConsole_konsol_msg_u_string{color:#B97800;}\n.YConsole_konsol_msg_u_object{color:#00C;cursor:pointer;}\n.YConsole_konsol_msg_u_array{color:#060;cursor:pointer;}\n.YConsole_konsol_error{background-color:#fee;}\n.YConsole_konsol_stack{background-color:#ddd;}\n.YConsole_konsol_objedit{background-color:#aaa;font-family:monospace;font-size:12px;height:100px;overflow-y:auto;}\n.YConsole_konsol_oe_line{background-color:#fff;border-bottom:solid 1px #999;}\n.YConsole_konsol_oe_label,.YConsole_konsol_oe_type,.YConsole_konsol_oe_val{display:inline-block;}\n.YConsole_konsol_oe_toggler{cursor:pointer;}\n.YConsole_konsol_oe_hide{cursor:pointer;position:absolute;margin-top:3px;right:20px;color:#FFF;background-color:#900;padding:0px 3px;border-radius:20px;border:solid 1px #000000;}\n.YConsole_konsol_oe_hide:hover{background-color:#F00;}\n.YConsole_konsol_oe_label{padding:0px 3px;}\n.YConsole_konsol_oe_type{padding:0px 3px;background-color:#ddd;}\n.YConsole_konsol_oe_val{}\n.YConsole_konsol_oe_childs{margin-left:12px;}\n.YConsole_konsol_msg_switch{display:inline-block;padding:0px 8px;border-radius:20px;background-color:#888;color:#fff;border:solid 1px #fff;cursor:pointer;}\n"));document.documentElement.appendChild(_dom_);})();

/* ------------------------------- ] YConsole.css ------------------------------- */



/* ------------------------------- YConsole.js [ ------------------------------- */

/**
	<b>YConsole.js</b> has been made to make js debugging easier under mobile with the
	lowest impact (no dependencies), exept for '<b>.YConsole_</b>' as a reserved css class name prefix
		 and of course '<b>YConsole</b>' as a reserved js var<br/>
	<a href="http://www.yorgsite.fr/experiments/YConsole/">get <b>YConsole</b></a>.<br/>
	<br/>
	<u>How to use :</u>
	<code>
< script type="text/javascript" src="js/YConsole-compiled.js">< /script>
< script type="text/javascript" >YConsole.show();< /script>
	</code>
	<br/>
	<u>Advanced use exemple :</u>
	<code>
	YConsole.activate();
	console.log("first intercepted log.");
	YConsole.docking="right";
	YConsole.MAX_LOG_ARRAY_LENGTH=80;
	YConsole.MAX_LOG_STR_LENGTH=300;
	...
	YConsole.show();
	</code>
	
	
	<!-- documentation tag for google analitycs -->
	<script>
          var _gaq = _gaq || []; _gaq.push(['_setAccount', 'UA-37289309-1']); _gaq.push(['_trackPageview']);
          (function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();
	</script>
 *@constructor
 * @property {string} docking determine where the console is hanging(default="left").<br/>
					availables values are : "left","right","top","bottom".
 * @property {int} MAX_OBJ_STR_LENGTH max String preview length in Object explorer(default=20).
 * @property {int} MAX_OBJ_ARRAY_LENGTH max Array content preview length in Object explorer(default=20).
 * @property {int} MAX_LOG_STR_LENGTH max String preview length in logs(default=200).
 * @property {int} MAX_LOG_ARRAY_LENGTH max Array content preview length in logs(default=40).
 * @property {int} SPLITTER_WIDTH Thickness of the resizers that separates the console pannel from the window or the Object explorer from the logs(default=3).
 */
var YConsole=new function YConsole(){
	
	var medias={
		"star"	: "data:image/png;base64,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",
		"autoscroll_off"	: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACF0lEQVRoge2Z3U3DMBRGTxDvdAPYoN0ANmg3aJmgbJAR2g1gA7oBMAFlAmACygSXBztSEsX2deKkLcqR/FDFP9+n+N5eOzAy0ons2AKAKTCJ6P/Wl5C2vAAS0SpcDCazJ87ewOWxBTSwBw6l3zPiYmRw6jFwG3he4ey3UNCAwHXspAJXAlftJMXhNSAwB/YCeeS8T8CrmBx/HASWAlJqS+W4vDTmR2GiUwy4RDzWxKvENJjWmE9nwO7dZ4eIwkRjTAhM7XPXWNc2TJqFboA7j8cJsKsHqP29w5+vV30EdsVABh/AQ2DMDBOkZXYY8y4OwCKD30h97RBYe7ZC0Ta2b1O81Nvcs1z6II4QpumzDizVjwFr4kUh0GtQsUzSIK6zwBRXbdhncN9yrBqvARt0C6rVoYYv/NksGcFaKINvjBitiUEzjqoaVabXgpXtPwgx5fQscb/hEHeN42rLiOl7zUKImfApQhDAVgYqpUPngSmmTIhlgjkP9H6ocRpQFmg+BjHRaMAu+kq4QFsF5p8B2xa6uqGscZa2rybAc89yaWshgU2sIOUYV2ZKZ0Dgtm2BJuHC78cRD8nfQO4R8e4KSjHH0U+PeNeZIK0BK6ZpX3+GMoo0n4tDlwHpDTSI0VyPFOPmmjfWu4GSiXfP63eNy8Xcbmj+A/ozMBCdDPz/y91T5xQ/cNTPEyf9cQPGj3xnztkbGBnpyB/uxFoC7GayWgAAAABJRU5ErkJggg==",
		"autoscroll_on"	: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABx0lEQVRoge2ZzW3CMBiGn1AGYIOyAWxQRmCEHFCdW9MN6Ab0llY9wASFCaAbpBuUDcICuIfQKimJEydODZIfiYMj5/v8Br/+BYejFZ5W7YgRsKiIuESw0og6AgYa9T+yhb7Gi9BjgGRSUWunFTP9IFUxs+Q+ek8z2cVx9QL0utD/EANJpjxG4ZFLFBCSN+oWhUeuvgs5AbZxAmzjBNjGCbCNE2AbJ8A2ToBtnADbXL2A/JbyjVuODEtrHxlXniRJhrxyp4iREPCp0UYl53tiyZqyTXSdYzAPH4mvqDEFcwLyXWjGviJ5WxYEbEwGPPdAmkB9fNiMGMGj6aDFJk4TxQbzJF39s+Wj0A1T8gdMzZHMTRo3S7kAc35YE/BsIE4h6nkgYINk2Ti65As6HRRqTGQeIU390MNHcGj0bu0UVQgOp66k64c59/nLiC6ot5RIDRjWjirZIXhq2CYt6q+FBKuafkjod9vvs+gt5jzCkzHLkfjM2LdokxZ69wOCAxFTyk1tYqkw/lNWXgDq3VL+EPGAd7bciIFJg1FHeYFRgIFLvnRiWueeye6HzCLabGj8Xz9Iwq6WCt0SMeKF95ZRtoDU+DkcJvkGLx1nlqQPTNMAAAAASUVORK5CYII=",
		"hang_b"	: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABvklEQVRoge2a0W2DMBRF76v6n26AN2g3gA3aDcIGZAPSCZpOwAgdoTBBkwnSThBvcPsRO0orAiYxGCSOxFcsv3uwE/lZAWbCIj4nI7kA8NQy7FtEfnzWvRmSC5If7EYcOvcJkm8dw5Pk3kftex+TwGyb7XaL1WrVODBNU6RpCgDKR2FfAgAArTWqqmockySJz5K48zpbAGaB0MwCoZkFQjMLhGYWCM0sEJpOp1GSEeqPwQ/XFL/Q1GgR2bnO4SRggm8AvLhO7Eh5oR4ArEXktW0C1y20hv/wrTXNi2vEqamneSVtHZfWGrtd8+pHUQSl1MXPzzo2AEhEpLlDcoHkp21ki6IggF6e5XJ53jMfzC3H7Zhbh68+JWrCP3oJP4RE7+H7lBgsfB8Sg4f3KZFlWZjwPiSKoggb/haJ0YS3dJEYXXiLi8Row1uaJEYf3lInMZnwlv8Sg4Q3RTOS+5rCY+PA4+HyGTDHaZI5jmf+KaEBKCtwAPBQliXKsgyaqg2l1J9+AQBg1ybPc+/HZN9PHMfn2yme/K3E5AXsd4Chg1xJYldgEzTGdWxFpDrdSpjf1ba/CYwFLSLvoUPMAMAvN/j4en9jhuMAAAAASUVORK5CYII=",
		"hang_l"	: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACHUlEQVRoge2a4XWCMBSF7+vpf92gbKAbECdoN2icRDuBI6AbtBOUTlDcwA2ECW5/lLQR0ZaQGNrjdw7nxCi8ewmEvIfAf4LkHckVyT2/2ZN8JXkfW9+P1EJPsSc5iq2xiZgGyQmAAgDW6zV2ux0AIEkSaK3Nz5SIvF1W4i8hmZpTnaYpARAA0zS1RyGNrbPJTWwBfbkaiM3VwDnqiSGrp+dFiBi3IQ4KACQfAaytLkUy9z0NBxkBW3xZlvZXyncs7waa4pVSvkMc4NVAm/jtduszxBHeDMQQD3gyEEs84MFATPFAz2nUQbwmqXqE3AF4FpEX0+FswBZfFAWUUqiq6qfdknrrgyY5FpEKcDTQVXye5y5hjrCm5AcAG8DBgMuZn81mXcOcim2aiWl0vYk1ul82QXExMBjxgMM0OiTxgKOBoYgHHAxorZFlWQgtTnQ1UALDMuFyExfAcEx0fQ6U+ExKcgBTU/Caz+dnd1osgmSTh3QpbJEckXw3nVmWff2+bQvAo9HttBqt1yEKcS6npYhszAfn5bSjiaX058k+YK98IPJIAPCQ0MQ24SWljGnCW1Ify4TXypyIVHXKmMN6ToTEe2GrbSQsyuM9+hGktGiZyK3uHIe1Ui8EK+7WJmbm6R3q3VowA4bQLwWvLzhi8+cNtN4D0+m0tT1oSE5+sQ6fxNZ5Fn7+0eMUq9j62pBmR32Wx43uUkQuVzPvwAehEB/H/VSXFgAAAABJRU5ErkJggg==",
		"hang_r"	: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACH0lEQVRoge2a4XGbMBiG36/X/7BBukG8QekG3qBmgrAB3qDeQGSDbmB5guAJQifIZYK3P4oc2QVsYj4J3/m58x1IWLzPWUgCLJgxJB8AfHP7IrKLl2YEJJ/Yz5ZkEjvjICTfBgRI8skd+zVm0AFSAKiqClVVHQqttUf1wHwFAABN02C3G+72XwJlUeMuEJu7QBckf3lD3pvmuK31Cyy97RSA1ZKYXIDkd7TTf13XrngBJQnVa6AoCn8iUpFQv4jzPFeVCDIKaUoEG0a1JILOAxoSRwIkH0i+nFnKDgLAhpQ4CJB8BFC3jaoypYS/nF6iXWev1+sr4n3QNE1vXZ7nAIDVagV8SGQi8v6pk5EsvW4Q7GOM8XvgC8nE7ZRleXSsR+lyR1/MdXWnMd+PLgB0SlzMLASA/yQuZjYCSZJgsRg/AM5CIEkSWGtvU6AjfD10/ClRBXrCZ2Pa6HwutN1ur0vWUhQF9vt9Z11feBF5/zcVXYYvYN1GlmVjs3aSpmln+VD4sec4CIjIjmQGYD066TEpzozlVVVNEh446ULt4+sfn2nI0d4T2756YwyWy8M9/1XhgcAXsTHGLd6ACcIDAQU0wgOBBLTCAwEENMMDyu8HNpvNZKNNHxq/QOM2tMMDCgIi8gfAyiv6DaXwgFIXEpFnAM8abZ8SfTV6LXeB2Ny8wKzfE0+1rA8Oydczj2B/xs44CMlH9v9fojzfwg3xF3sE6sa4oOH/AAAAAElFTkSuQmCC",
		"hang_t"	: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABq0lEQVRoge2Y3XGjMBRGjzJ+j1PBuoPQgVwCHdBCOqAE3AGt2BXEqSBKBVYH3z6E3WVsY+SsjGBGZ0YPDEI+H3++F8hk/gsDIOkXsAVKYJ1SKAAPHIG9MeZgJD0DjvmLn+OBzQoo6OSPxyPe+6RWY6zXa4qigG/nAklWHdZaAbMe1v7VlST79KATNRmLD7Dqb+x2u0U8A30W/xbq/w/siBdi040+rhsx8MCbMeYr0nr/kPQq6aRLTpJeo/9gTM7lq6pSVVXLCHFNnu7dPfsQt+SZe4gQeeYa4h55hkPYxcgPhJCkKql80zR3F2VN06QJcS7ftu2PK8u2bacNEVN+8hCPkJ8sxCPlJwkh6fOR8gMhTiFuq/EpQFdZeu9xzlHX9dVJ+/2ew+FwcyFrLdvt9uo+5xze+z81f7zyvn8FblHX9ehZrus6ZClJ+gxxC20pS75r8KnwwFvIxKBbyBjzAbwM7ZekMK+Ldc1Pjuuz+KY+B0hNDpCaHCA1OUBqcoDU5ACpWXyA0I5sDAdsyrIcnTjUjSVF0kVHHqvjmgRJz5Le75B/V+oPu5lI/Abu4o4uBR5Y5AAAAABJRU5ErkJggg==",
		"save"		: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABb0lEQVRoge2Y7W2DMBiE76r+TzYoG5QNmkzQjsAIjEAnaLpBV+gEpRvQDRihmeDtjziSRUuwXxtMVD8SAgs43wl/YSCTyfyJiDSyHtoxn7cOWT7NuQSwscqx2QK4j6Ym5gtY5coux0ZEdpovcONRRxHscgYmm5CVvpjViRKXPvBgF0SkINnPY8cfnyZ0pohtIgRNgFWRA6QmB0iNJsA2uosANAHK6C4C+JdNaFW4LCWGVCKyi20Eyr6lCXBnjlVw9U0oB0hNDpCaHCA1Vx9AM5EN2QPoML7I60h++wj67D/FCACczH+M3NsDaCPV84tYAbwY7LTVJDut1qUAvVbUAXuvKegHabQTk3wD8B4ivgRTo1AF4LiADzUXA5jR42khLyom5wGSLYDX+a3ocJrISNYAvmb2osJnGK1wGs83Eep9tq77ECHnACQ7EWkAvIRUaLSaUI0zXhMZyYP5oX/0eU9ESgAHx8drH+1MJpNJyw/ZpvErBKV1UgAAAABJRU5ErkJggg==",
		"help"		: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC7ElEQVRogdVa0ZXaMBCcvZd/0gF0AB1AKoAOoAPogOvg6ABSAXSAUwFcBZAKcCqYfEgOts9Ia1k2ZN67r5N2ZyRrtdoF+M8hsQyR7AEYARjYv0dIAKQi8hnLdzBI9kguSR5ZHxeSW5LjZxAfktwHkHaJmXdBvEfyIyLxMk5sa0dIzkneWiSfx4eWl+oQk1wDeK+p+Wr/yhgB+K6YfwCwEJE/Nf0WQXPQXDiSXJOckhzTRCOfzT7Njh49tk8aey5H8weGLySnwYaLPoaW6CNsY5MnyWMM8q2JsAZdBzaqAOuz5/GpC7PWkGs1WhFgfU8dPm8khxojaw/51gRY/67F++JXSpP7qA59ZSQi8qM0dwxgheoQmQDYichvhYAlgI1jyEJEfj6avFWsfmElaM6LZt6RuhA79ti5PJrYV5InTRhds34St4wggKw60DRZZdvwnh3qBOyz8W+5uQuf8Y4wUIyZ0X6Ob0DhMdI2rooxWh4T4L4Dk/pcgpAoxsyUtibAXUAXq588DH8WNKF4oLQ3AroTcIZuZVc1bBYEaPLzUOwATHx5PU2I1X4+QJ4zwx7l3pBJ5fOQuvTlCwDgWw3FGuxgXlKJ5iVFE/02aBrCGW8H1A9ymgvLl/U6AcTfAQ3xOcxhjRI4MgEJOrgLaFKJWH4S4B6F0khGu0QK3AWcn0gkFGfAChCRX8/lEoQEKGajh+fwCEKaLXo+Ch1Q7yaswoak6zzFSln+LXb5TXxDu2lFLIyy/sJb6R+ux/SrIMk3R8o70IN5dITswhUmlfDhPcB2HhNn0KG7uOSCqlbUJHWgtuzOsO5L2wIurCjLlM9AhgVe63JLAcyqMtxKAXbgAq+TYqyCupo0VbfLEz+hGz1VaWc6LSKfJEcw17bvEhrQtKJiIYWJOM37ydSV3GNCV0oPENJF+bFZX0whYsh2igDe7z22kDHjdOtvNP249lbdIyT7vcSe+kb4iabj37grH+3XKhkUpM6Nm9c5/AXGQ2texQcufAAAAABJRU5ErkJggg==",
		"clear"		: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACuklEQVRogdWa63XaQBCFZ9OA0oHdAemAEpwOcCogHZAOnA4gFZAO5FQAroASRCr48mOlg5D3MfsQxPccfgCa2XtXo9mdWYl8cJhajoBGRL6IyGP/8eFVRM7GmLdaY2cDaIA10JKOE7AFlvcgvgD2GaRDYla3IN4ALxWJT3FgrjsCrIBuRvJjvNQmv7kR8TH22MRQTH57B/IDDkUisGFzb2w/MvkBXhHOhQxYiF1wPk/++tH/PuCriHzPmqELfovIz9H3x/77dOxnY8yvqDdsqjxoZiFwrRbOGMd997t+YqMCNp7BnA9TgYjgA+rx2cbIP/hGU9ilrBEd8BDx2Xps/Ss24ZQZvH3Y7YVGhCoUAr5OoVkMYa8YNCZCS34d4fL+LiiMQJGTAyK05FcKHu8nE/2DqBUxRS3yA5qxYZNgqBUxJhPdKieSB3gaGz8lGqeImIM8jHes5O821zFyCvKucNOgHTspqa6yKyn0qdeFbuyoLRCQJaKQPGAX10+5szfBLkUE/s1iMmoJELEiovUsNv29SgXyIpUFGGP+xC4yxvyV8i34NSo8A8lVExUKprGzzS3JVxLRilxC6JzJYWeM+ZYroK+wnjPNzyIXAccMB0eJxDJ2ixLsKvQidpnjXw2Wgmi7g0ulpmqNkN6+WU4daFfjFPJqm0QRnct4NRP5OUS4EwfhpV1LIFRXHGL2ShHu2oJwOtWssrGBQbcNb/BPpr8zETKsRD5FROuxDU8k/uIm1MNJIa8SgTsUdW133BlpU5F8UASwdFx7Qtupxp9JNpNrahwzXZ0DYCNgGsa6tuJERHHBURF5VR9WxOmOxLts8iMRpR3oEvJpYfMfiahHfiJE034sRdm5mELEgvIKzoXyeE8UsqROGu2wG8n5Zj0iZHhfYo8+7R6wJ/7Fp/LV3lYZoCB17DsTVfAPupJUHb0SsfMAAAAASUVORK5CYII=",
		"stack_off"	: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA3ElEQVRoge3YsRGCQBAF0H9qH5RACZRyMZElXAnWYWQJtHAdaGgXa+DJAB4EeMMuzn8zBPwjuA9sAABRMRcAsoPjDsB/Nu0GBaTUndiIA4DTNBWx3cM5Nzo/KO2jGBbQxgLaWEAbC2hjAW0soI0FtLGAtv8rEGP8ushStqT/8m/bthORICIhhNBZyzDzA8IDCOmoB3llMDvnCuxFPbdQAWg23MgaHu/XJ/sEbmlxtqEBudeq16RFomUcYk0cYiqAQ6yJQ2xebg6sZyO5OTCdHScFngAeAK47yoh+8QKNXOs9J8UmcgAAAABJRU5ErkJggg==",
		"stack_on"	: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAApElEQVRoge3YsQ3CMBQG4d+IARgmA7AJI7ECA3kHRoANnAopIQ0gi8PoPimFU72Lq5dE6uacpA3wXJOcHkOXRUDr9SW+pCTJ/vlta7/dUUpZnXfQHN0YQDOAZgDNAJoBNANoBtAMoBlAG36pH/4GNn8laq3EHC+bpml1Hv4GDKAZQDOAZgDNAJoBNANoy43sluRADfKBzUZ2YeZ42z3JkR5Cf2MGit01yFz2brsAAAAASUVORK5CYII="
}	
	var yconsole=this;
	this.MAX_OBJ_STR_LENGTH		= 20;
	this.MAX_OBJ_ARRAY_LENGTH	= 20;
	this.MAX_LOG_STR_LENGTH		= 200;
	this.MAX_LOG_ARRAY_LENGTH	= 40;
	
//	this.SPLITTER_WIDTH	= 20;
	
	var SPLITTER_WIDTH = 5;
	var TOOLS_SIZE = 20;
	
	var className="YConsole_konsol";
	
	//◄►◊○   ▲►▼◄█▓▒░▬
	// ------------------------ tools [ -----------------	
		/**@ignore*/
		var htmlspecialchars=function(text){
			var div = document.createElement('div');
			div.appendChild(document.createTextNode(text));
			return div.innerHTML.split("\n").join("<br/>");
		};
		/**@ignore*/
		var unit_call=function(lunit,_caller){
			if(_caller.objedit){
				_caller.objedit.show(lunit);
			}else if(typeof(lunit)=="function"){
				//_caller.toggle();
			}
		};
		/**@ignore*/
		var get_size	= function(domelt){
			var cstyl=window.getComputedStyle(domelt, null)
			return [parseInt(cstyl.getPropertyValue("width")),parseInt(cstyl.getPropertyValue("height"))];
		};
		/**@ignore*/
		var makecssrule=function(selector){
			if(document.styleSheets.length==0){
				var selem = document.createElement('style');
				selem.appendChild(document.createTextNode(""));
				document.body.appendChild(selem);
			}
			var sheet=document.styleSheets[document.styleSheets.length-1];
			sheet.insertRule(selector+"{\n\n}",sheet.cssRules.length);
			return sheet.cssRules[sheet.cssRules.length-1];
		};
		/**@ignore*/
		var makedom=function(tagName,properties,childs){
			var nudom=document.createElement(tagName);
			if(typeof(properties)=="object"){
				for(var i in properties)
					if(i=="style"){
						for(var j in properties.style){
							nudom.style[j]=properties.style[j];
						}
					}else if(i=="innerHTML"){
						nudom.innerHTML = properties.innerHTML;
					}else	nudom[i]=properties[i];
			}
			if(childs){
				for(var i in childs)
					nudom.appendChild(childs[i]);
			}
			return nudom;
		};
		/**@ignore*/
		var append_child=function(target,childnode){// passes MS apps injection security.
			if (typeof (MSApp) != "undefined") {
				// autrement windows bloque la propriété innerHTML
				MSApp.execUnsafeLocalFunction(function () {
					target.appendChild(childnode);
				});
			} else {
				target.appendChild(childnode);
			}
		};
		/**@ignore*/
		var to_inner_html=function(target,html){// passes MS apps innerHTML security.
			if (typeof (MSApp) != "undefined") {
				// autrement windows bloque la propriété innerHTML
				MSApp.execUnsafeLocalFunction(function () {
					target.innerHTML = html;
				});
			} else {
				target.innerHTML = html;
			}
		};
		/**@ignore*/
		var makemover=function(domelt,on_move){
			var is_down=false,lastxy=[0,0];
//			alert(document.ontouchstart+"");
			if(typeof(document.ontouchstart)!="undefined"){
				domelt.addEventListener("touchstart",function(evt){
					is_down=true;
					lastxy=[evt.changedTouches[0].pageX,evt.changedTouches[0].pageY];
				});
				window.addEventListener("touchend",function(evt){
					is_down=false;
				});
				window.addEventListener("touchmove",function(evt){
					
					if(is_down){
						var newxy=[evt.changedTouches[0].pageX,evt.changedTouches[0].pageY];
						on_move([newxy[0]-lastxy[0],newxy[1]-lastxy[1]]);
						lastxy=newxy;
					}
				});
			}else{
				domelt.addEventListener("mousedown",function(evt){
					is_down=true;
					lastxy=[evt.pageX,evt.pageY];
				});
				window.addEventListener("mouseup",function(evt){
					is_down=false;
				});
				window.addEventListener("mousemove",function(evt){
					
					if(is_down){
						var newxy=[evt.pageX,evt.pageY];
						on_move([newxy[0]-lastxy[0],newxy[1]-lastxy[1]]);
						lastxy=newxy;
					}
				});
			}
			
		};
		/**@ignore*/
		var runorwait=function(Function){
			if(document.readyState=="complete"){
				Function();
			}else{
				window.addEventListener("load",Function);
			}
		};
		
		/**@ignore*/
		var u2log=function(lunit,_caller,className){
			var utype= lunit instanceof Array?"array":typeof(lunit);
			var klass = className+"_msg_u_"+utype;
			if(utype=="number"){
				return makedom("span",{innerHTML:lunit+"",className:klass});
			}else if(utype=="string"){
				var mstr = lunit+"",/**@ignore*/mup=function(){};
				var maxstr = _caller.objedit?yconsole.MAX_LOG_STR_LENGTH:yconsole.MAX_OBJ_STR_LENGTH;
				if(mstr.length>maxstr){
					mstr=mstr.substring(0,maxstr)+"…";
					/**@ignore*/mup = function(){unit_call(lunit,_caller);};
				}
				
				return makedom("span",{innerHTML:"\""+htmlspecialchars(mstr)+"\"",className:klass,onmouseup:mup});
			}else if(utype=="function"){
				return makedom("span",{innerHTML:"function",className:klass,onmouseup:function(){unit_call(lunit,_caller);}});
			}else if(utype=="array"){
				var mstr = " "+lunit.join(" , ")+" ";
				var maxstr = _caller.objedit?yconsole.MAX_LOG_ARRAY_LENGTH:yconsole.MAX_OBJ_ARRAY_LENGTH;
				if(mstr.length>maxstr)mstr=mstr.substring(0,maxstr)+" , …";
				
				return makedom("span",{innerHTML:"[ "+mstr+" ]",className:klass,onmouseup:function(){unit_call(lunit,_caller);}});
			}else if(utype=="object"){
				return makedom("span",{innerHTML:"Object",className:klass,onmouseup:function(){unit_call(lunit,_caller);}});
			}
			return makedom("span",{innerHTML:lunit+"",className:klass});
		};
	// ------------------------ ] tools -----------------	

	// ------------------------ rules [ -----------------	
	var tools_button_rule = makecssrule("."+className+"_tools_button,."+className+"_tools_button img");
	var resize_vertical_rule = makecssrule("."+className+"_resize_vertical");
	var resize_horizontal_rule = makecssrule("."+className+"_resize_horizontal");
	
	// ------------------------ ] rules -----------------	

	
	/**@ignore*/
	var AutoResizer=function(targetNode,on_resize){
		var size=[-1,-1],lastsize=[-1,-1];
		/**@ignore*/
		this.force	= function(){
			on_resize(size);
		};
		var check_resize	= function(){
			if(targetNode.parentNode){
				var wh=get_size(targetNode.parentNode);
			//	var wh=targetNode.parentNode!=document.body?get_size(targetNode.parentNode):[window.innerWidth,window.innerHeight];;
				if((size[0]!=wh[0]||size[1]!=wh[1])||(size[0]!=lastsize[0]||size[1]!=lastsize[1]))
					on_resize(wh);
				lastsize=size;
				size=wh;
			}
			requestAnimationFrame(check_resize);
		};
		requestAnimationFrame(check_resize);
	};
	
	/**@ignore*/
	var Selector=function(childsByValue,on_change){
		var selscope=this;
		var svisible=false;
		var _className=className+"_selector";
		//var _className=className+"_selector";
		var dom_value	= makedom("div",{className:_className+"_value"});
		var dom_childs	= makedom("div",{className:_className+"_childs",style:{display:"none"}});
		this.dom		= makedom("div",{className:_className},[dom_value,dom_childs]);
		var setValue=function(value){
			var child = childsByValue[value];
			if(child instanceof HTMLElement){
				dom_value.appendChild(child);
			}else{
				to_inner_html(dom_value,""+child);
			}
		};
		var setVisible=function(visible){
			
		};
		var addachild=function(value){
			if(dom_value.innerHTML.length==0)setValue(value);
			var child = childsByValue[value];
			var cdom = makedom("span",{className:_className+"_option"},[]);
			if(child instanceof HTMLElement){
				cdom.appendChild(child);
			}else{
				to_inner_html(cdom,""+child);
			}
			dom_childs.appendChild(cdom);
			cdom.onmouseup=function(){
				//console.log("value="+value);
				on_change(value);
				setValue(value);
			};
		};
		for(var i in childsByValue)addachild(i);
		//svisible
		dom_value.addEventListener("mouseup",function(){
			if(!svisible){
				requestAnimationFrame(function(){
					svisible=true;
					dom_childs.style.display="";
				});
			}
		});
		document.addEventListener("mouseup",function(){
			if(svisible){
				svisible=false;
				dom_childs.style.display="none";
			}
		});
	};
	/**@ignore*/
	var ObjEdit=function(_console){
		var scope=this;
		var oe_dom_hide	= makedom("div",{className:className+"_oe_hide",innerHTML:"X"},[]);
		oe_dom_hide.onmouseup=function(){scope.hide();};
		scope.dom	= makedom("div",{className:className+"_objedit",style:{display:"none"}},[oe_dom_hide]);
		scope.visible=false;
		var OENode=function(name,obj){
			var oen = this;
			var visible=false,parsed=false;
			var utype= obj instanceof Array?"array":typeof(obj);
			var oe_dom_toggler	= makedom("span",{className:className+"_msg_switch",innerHTML:"►"},[]);
			
			var oe_dom_label	= makedom("span",{className:className+"_oe_label",innerHTML:name+""},[]);
			var oe_dom_type		= makedom("span",{className:className+"_oe_type",innerHTML:""+utype+""},[]);
			var oe_dom_val		= makedom("span",{className:className+"_oe_val"},[
				u2log(obj,oen,className)
			]);
			var oe_dom_childs	= makedom("div",{className:className+"_oe_childs",style:{display:"none"}},[]);
			this.dom	= makedom("div",{className:className+"_oe_node"},[
				makedom("div",{className:className+"_oe_line"},[oe_dom_toggler,oe_dom_label,oe_dom_type,oe_dom_val]),
				oe_dom_childs]);
			
			var togglables={"function":1,"string":1,"object":1,"array":1};
			if(togglables[utype]){
				oe_dom_toggler.onmouseup=function(){oen.toggle();};
			}else{
				oe_dom_toggler.style.visibility="hidden";
				oe_dom_toggler.style.cursor="default";
			}
			
			/**@ignore*/
			this.toggle=function(){
				if(!parsed){
					//►▼
					if(typeof(obj)=="function"){
						to_inner_html(oe_dom_childs,htmlspecialchars(obj+""));
					}else if(typeof(obj)=="string"){
						to_inner_html(oe_dom_childs,htmlspecialchars(obj+""));
					}else{
						for(var i in obj){
							oe_dom_childs.appendChild(new OENode(""+i,obj[i]).dom);
						}
					}
					parsed=true;
				}
				visible=!visible;
				to_inner_html(oe_dom_toggler,visible?"▼":"►");
				oe_dom_childs.style.display=visible?"":"none";
			};
		};
		/**@ignore*/
		this.show=function(obj){
			scope.dom.style.display='';
			scope.dom.innerHTML='';
			scope.dom.appendChild(oe_dom_hide);
			scope.dom.appendChild(new OENode("_",obj).dom);
			scope.visible=true;
			_console.forceresize();
		};
		/**@ignore*/
		this.hide=function(){
			scope.dom.style.display='none';
			scope.visible=false;
			_console.forceresize();
		};
	};
	/**@ignore*/
	var Helper=function(){
		var scope=this;
		this.dom		= null;
		var oe_dom_hide	= makedom("span",{className:className+"_help_exit",innerHTML:"X"},[]);
		var build=function(){
			scope.dom	= makedom("div",{className:className+"_help"},[makedom("div",{innerHTML:content}),oe_dom_hide]);
			new AutoResizer(scope.dom,on_resize);
			hide();
			oe_dom_hide.onmouseup=hide;
		};
	//◄►◊○   ▲►▼◄█▓▒░▬
		var makeparagraph	= function(title,content){
			return "<u>"+title+"</u><div>"+(content.join?content.join("<br/>"):content)+"</div>";
		};
		var makealphaband	= function(from,to,steps){
			var list=[];
			for(var i=0;i<steps;i++){
				var grey = Math.round(from+(i/steps)*(to-from));
				list.push("<span style='background-color:rgb("+grey+","+grey+","+grey+");'>&nbsp;</span>");
			}
			return "<span style='border:solid 1px #888;'>"+list.join("")+"</span>";
		};
		var content=[
			"<h2>YConsole Quick Reference</h2>"+
//			"<span style='font-size:26px;'>YConsole Quick Reference</span>",
			
			""+makeparagraph("<b>Misc</b>",[
				"<span class='YConsole_left_pan_switch' style='position:relative;'><img width='24' src=\""+medias["star"]+"\"/></span> :",
				""+makeparagraph("switcher","hide or show the console pannel.")
			]),
			"",
			""+makeparagraph("<b>Tools Pannel</b>",[
				"<span class='YConsole_konsol_tools'><a><img width='24' src=\""+medias["autoscroll_on"]+"\"/></a></span> "+
					"/ <span class='YConsole_konsol_tools'><a><img width='24' src=\""+medias["autoscroll_off"]+"\"/></a></span> : ",
				makeparagraph("Toggle autoscroll","Enables / disables auto scrolling to last log."),
				"<span class='YConsole_konsol_tools'><a><img width='20' src=\""+medias["save"]+"\"/></a></span> : ",
				makeparagraph("Save logs","save logs to a text file."),
				"<span class='YConsole_konsol_selector_value' style='color:#fff;'><img width='24' src=\""+medias["hang_l"]+"\"/></span> : ",
				makeparagraph("Docking",[
					"choose where the console is hanging.",
					"availables are :",
							" <img width='24' src=\""+medias["hang_l"]+"\"/> : left",
							" <img width='24' src=\""+medias["hang_r"]+"\"/> : right",
							" <img width='24' src=\""+medias["hang_t"]+"\"/> : top",
							" <img width='24' src=\""+medias["hang_b"]+"\"/> : bottom"
					]),
				makealphaband(155,255,8)+" : ",
				makeparagraph("Alpha",[
					"modify opacity to view behind the logs."
					]),
				"<span class='YConsole_konsol_tools'><a><img width='20' src=\""+medias["clear"]+"\"/></a></span> : ",
				makeparagraph("clear","clear the log pile.")
			]),
			"",
			""+makeparagraph("<b>Objects explorer</b>",[
				"You can explore objects, arrays or long strings from logs.",
				"Clicking on it will open the Objects explorer pannel(if not visible).",
				"<span class='YConsole_konsol_oe_hide' style='position:relative;right:auto;'>X</span> :",
				""+makeparagraph("Exit","close the Objects explorer pannel.")
			]),
			"",
			""+makeparagraph("<b>Credits</b>",[
				"<b>YConsole.js</b> has been made to make js debugging easier under mobile with the "+
					"lowest impact (no dependencies), exept for '<b>.YConsole_</b>' as a reserved css class "+
					"name prefix and of course '<b>YConsole</b>' as a reserved js var.",
				"<a href='http://www.yorgsite.fr/experiments/YConsole/doc/' target='_blank'>js documentation</a>."	,
				"<a href='http://www.yorgsite.fr' target='_blank'>www.yorgsite.fr</a>."	
			]),
			""
		].join("<br/>");
		
		var on_resize	= function(wh){
			scope.dom.style.height=(wh[1])+"px";
			if(scope.dom.parentNode&&scope.dom.parentNode!=oe_dom_hide.parentNode){
				scope.dom.parentNode.appendChild(oe_dom_hide);
			}
		};
		
		/**@ignore*/
		this.show=function(){
			scope.dom.style.display="";
			oe_dom_hide.style.display="";
		};
		/**@ignore*/
		var hide=function(){
			scope.dom.style.display="none";
			oe_dom_hide.style.display="none";
		};
		build();
	};
	/**@ignore*/
	var Konsol=function(){
		var scope=this,classid;
		var dom_tools,dom_split,dom_list;
		this.dom		= null;
		this.objedit	= null;
		var stk_rule;
		//var w_rule,w_rule2;
		var logs = [];
		var autoscroll=true,stktrace=true;
		var dom_autoscroll,dom_stktrace,dom_clear,dom_alpha;
		var autosize=null;
		//className=typeof(className)=="string"?className:"YConsole_konsol";
		//var classid = className+"_"+Math.round(Math.random()*100000000);
		var build=function(){
			//className=typeof(className)=="string"?className:"YConsole_konsol";
			classid = className+"_"+Math.round(Math.random()*100000000);
				
			scope.objedit	= new ObjEdit(scope);
			
			dom_tools	= makedom("div",{className:className+"_tools",innerHTML:""});
			dom_split	= makedom("div",{className:className+"_split",style:{display:"none"}});
			dom_list	= makedom("div",{className:className+"_list",innerHTML:""});
			scope.dom	= makedom("div",{className:className},[dom_tools,scope.objedit.dom,dom_split,dom_list]);
			
			stk_rule = makecssrule("."+classid+"_stk");
			
			tools_button_rule.style.width=TOOLS_SIZE+"px";
			//w_rule2 = makecssrule("."+classid+"_w2");
			
			resize_vertical_rule.style.height=SPLITTER_WIDTH+"px";
			resize_horizontal_rule.style.width=SPLITTER_WIDTH+"px";
			
			scope.dom.style.left	= 0+"px";
			scope.dom.style.top		= 0+"px";
			
			autosize = new AutoResizer(scope.dom,on_resize);
			//requestAnimationFrame(on_resize);
		//	build_tools();
		
		
		
			requestAnimationFrame(build_tools);
		};
		var build_tools=function(){
			// autoscroll
			append_child(dom_tools,makedom("span",{innerHTML:" &nbsp; &nbsp; console &nbsp; "}));
			dom_autoscroll=makedom("a",{className:className+"_tools_button",innerHTML:"<img src=\""+medias["autoscroll_on"]+"\"/>",title:"toggle autoscroll[on]",onmouseup:function(){
				autoscroll=!autoscroll;
				to_inner_html(this,autoscroll?"<img src=\""+medias["autoscroll_on"]+"\"/>":"<img src=\""+medias["autoscroll_off"]+"\"/>");
				this.title="toggle autoscroll["+(autoscroll?"on":"off")+"]";
			}});
			append_child(dom_tools,dom_autoscroll);
			
			
			// stack visible
/*			append_child(dom_tools,makedom("span",{innerHTML:" &nbsp"}));
			dom_stktrace=makedom("a",{innerHTML:"<img width='20' src=\""+medias["stack_on"]+"\"/>",title:"toggle stack trace[on]",onmouseup:function(){
				stktrace=!stktrace;
				to_inner_html(this,stktrace?"<img width='20' src=\""+medias["stack_on"]+"\"/>":"<img width='20' src=\""+medias["stack_off"]+"\"/>");
				stk_rule.style.display=stktrace?"":"none";
				this.title="toggle stack trace["+(stktrace?"on":"off")+"]";
			}});
			append_child(dom_tools,dom_stktrace);*/
			stk_rule.style.display="none";
			
			//dom_save
			append_child(dom_tools,makedom("span",{innerHTML:" &nbsp"}));
			dom_save=makedom("a",{className:className+"_tools_button",innerHTML:"<img src=\""+medias["save"]+"\"/>",title:"save console",onmouseup:function(){
				//save.png
				var saver = makedom("a",{download:"log.txt",href:URL.createObjectURL(new Blob([""+logs_2_txt()]))});
				
				var clickEvent = document.createEvent("MouseEvent");
				clickEvent.initEvent("click", true, true);
				saver.dispatchEvent(clickEvent); 
			}},[]);
			append_child(dom_tools,dom_save);

			makemover(dom_split,function(mxy){
				scope.objedit.dom.style.height=(scope.objedit.dom.offsetHeight+mxy[1])+"px";
				autosize.force();
			});
			//←↑→↓
			var selector=new Selector({
				left:"<img width='20' src=\""+medias["hang_l"]+"\"/>",
				right:"<img width='20' src=\""+medias["hang_r"]+"\"/>",
				top:"<img width='20' src=\""+medias["hang_t"]+"\"/>",
				bottom:"<img width='20' src=\""+medias["hang_b"]+"\"/>"
			},function(_ndock){
				yconsole.docking=_ndock;
			});
			selector.dom.title="docking";
			append_child(dom_tools,makedom("span",{innerHTML:" &nbsp"}));
			append_child(dom_tools,selector.dom);
			
			dom_alpha=makedom("span",{innerHTML:""});
			//█▓▒░
			var addalev=function(opacity){
				var grey = Math.round(opacity*128)+127;
				dom_alpha.appendChild(makedom("span",{innerHTML:"&nbsp;",title:"opacity:"+opacity,
								style:{backgroundColor:"rgb("+grey+","+grey+","+grey+")"},
								onmouseup:function(){scope.dom.style.opacity=opacity;}}));
			};
			for(var i=2;i<11;i++)addalev(i/10);
			append_child(dom_tools,makedom("span",{innerHTML:" &nbsp"}));
			append_child(dom_tools,dom_alpha);
			
			var dom_help=makedom("a",{className:className+"_tools_button",innerHTML:"<img src=\""+medias["help"]+"\"/>",title:"help",onmouseup:function(){
				helper.show();
			}});
			append_child(dom_tools,makedom("span",{innerHTML:" &nbsp"}));
			append_child(dom_tools,dom_help);
			
			dom_clear=makedom("a",{className:className+"_tools_button",innerHTML:"<img src=\""+medias["clear"]+"\"/>",title:"clear console",onmouseup:function(){
				if(window.confirm("clear console ?"))scope.clear();
			}});
			append_child(dom_tools,makedom("span",{innerHTML:" &nbsp"}));
			append_child(dom_tools,dom_clear);
			
			dom_split.style.height=yconsole.SPLITTER_WIDTH+"px";
			//textContent 
			//alert("build_tools "+dom_tools.childNodes.length);
		};
		
		var on_resize	= function(wh){
			var wh_tools=[dom_tools.offsetWidth,dom_tools.offsetHeight];
			var wh_oedit=[0,0],wh_ds=[0,0];
			
//			var wh_ds=scope.objedit.visible?get_size(dom_split):[0,0];
			
			if(docking=="left"||docking=="right"){
				
	//			dom_split.style.width="100%";
	//			dom_split.style.height=yconsole.SPLITTER_WIDTH+"px";
			}else if(docking=="top"||docking=="bottom"){
	//			dom_split.style.height=yconsole.SPLITTER_WIDTH+"px";
		//		dom_list.style.height="";
		//		dom_split.style.width=yconsole.SPLITTER_WIDTH+"px";
			}
			if(scope.objedit.visible){
				dom_split.style.display="";
				var wh_oedit=get_size(scope.objedit.dom);
				var wh_ds=get_size(dom_split);
			}else{
				dom_split.style.display="none";
			}
			
			dom_list.style.height=(wh[1]-wh_tools[1]-wh_oedit[1]-wh_ds[1])+"px";
		};
		
		var unit2log=function(lunit,_caller){
			return u2log(lunit,_caller,className);
		};
		
		var logs_2_txt	= function(){
			var stra=[];
			for(var i=0,logline;logline=logs[i];i++){
				stra.push(logline.toText());
			}
			return stra.join("\r\n----------------------------------------\r\n");
		};
		var LogLine=function(type,msg,trace){
			this.type	= type;
			this.msg	= msg;
			this.trace	= trace;
			var line=this;
			var dom_cnt		= makedom("span",{className:className+"_counter",innerHTML:"1"});
			
			
			//var iltrace = trace.split("<br/>")[0].split(")")[0].split("/").pop();//alert(iltrace);
			var iltrace = trace.source;
			
//			old_log.apply(console,["________ trace : ",trace,"\n",iltrace]);
			//var iltrace = (trace.split(":")[0]+trace.split(":")[1]).split("/").pop();//alert(iltrace);
			
			var dom_msg_switch	= makedom("span",{className:className+"_msg_switch",innerHTML:"►"},[]);
			var dom_msg_msg		= makedom("span",{className:className+"_msg_msg"},[]);
			var dom_trace_source		= makedom("span",{"style":{"float":"right",color:"#000"},innerHTML:""+trace.source});
			var dom_msg			= makedom("div",{className:className+"_"+type+"",innerHTML:""},[dom_msg_switch,dom_trace_source,dom_msg_msg]);
			
			var dom_stack	= makedom("div",{className:className+"_stack "+classid+"_stk",innerHTML:""+trace.html});
			this.dom	= makedom("div",{className:className+"_line"},[dom_msg,dom_stack]);
			
			var stack_showing=false;
			dom_msg_switch.addEventListener("click",function(){
				stack_showing=!stack_showing;
				dom_msg_switch.innerHTML=stack_showing?"▼":"►";
				dom_stack.style.display=stack_showing?"block":"none";
			});
			
			if(typeof(msg)=="object"){
				dom_msg_msg.innerHTML="";
				if(typeof(msg.length)=="number"){
					for(var i=0;i<msg.length;i++){
						if(i>0)dom_msg_msg.appendChild(makedom("span",{innerHTML:" , "}));
						dom_msg_msg.appendChild(unit2log(msg[i],scope));
					}
				}
			}else{
				dom_msg_msg.innerHTML=""+msg;
			}
			dom_msg_msg.appendChild(dom_cnt);
			
			dom_cnt.style.display="none";
			this.toText=function(){
				return "["+dom_cnt.innerHTML+"] "+(typeof(msg)=="object"?Array.prototype.concat.apply([],msg).join(" , "):dom_msg_msg.textContent+"").split("\n").join("\r\n");
			};
			this.cntIncr=function(){
				dom_cnt.style.display="";
				to_inner_html(dom_cnt,1+parseInt(dom_cnt.innerHTML));
			};
		};
		
		var compare_last_line	= function(type,msg,trace){
			if(logs.length==0)return false;
			if(!(logs[logs.length-1].type+""==type+""))return false;
			if(!(logs[logs.length-1].trace+""==trace+""))return false;
			if(typeof(msg)=="object"||typeof(msg)=="array"){
				if(typeof(msg)!=typeof(logs[logs.length-1].msg))return false;
				for(var i in msg){
					if(msg[i]!=logs[logs.length-1].msg[i])return false;
				}
				for(var i in logs[logs.length-1].msg){
					if(msg[i]!=logs[logs.length-1].msg[i])return false;
				}
			}else{
				return logs[logs.length-1].msg+""==msg+"";
			}
			return true;
		};
		var log_line	= function(type,msg,trace){
			if(type=="error"){
				msg=(""+msg).split("Error").join("<b style='color:#f00;'>Error</b>");
			}else{
			}
			if(compare_last_line(type,msg,trace)){
				logs[logs.length-1].cntIncr();
			}else{
				var ll = new LogLine(type,msg,trace);
				logs.push(ll);
				dom_list.appendChild(ll.dom);
				if(autoscroll)ll.dom.scrollIntoView();
			}
		}; 
		/**@ignore*/
		this.forceresize=function(){
			autosize.force();
		};
		/**@ignore*/
		this.trace_track	= function (level){
			var stack,html,source;
			level=typeof(level)=="number"&&level>0?level:1;
			try{eval("5=5;");}catch(e){
				if(typeof(e.stack)=="string"){
					stack = e.stack.split("\n");
					var te = true;
					var sline;
					while(stack.length>0&&stack.shift().indexOf("trace_track")==-1){};
					while(stack.length>0&&stack[0].indexOf("YConsole")!=-1){stack.shift();};
					stack =  stack.join("\n");
					//alert(stack);
				}else{
					stack = "";
				}
			}
			html	= stack.split("<").join("&lt;").split(">").join("&gt;").split("\n").join("<br/>");
			source	= stack.split("\n")[0].split(")")[0].split("/").pop();
			return {
				stack	: stack,
				html	: html,
				source	: source
			};
		};
		/**@ignore*/
		this.updateDocking	= function(){
//			scope.dom	= makedom("div",{className:className},[dom_tools,scope.objedit.dom,dom_split,dom_list]);
			var childsorder;
			if(docking=="left"){
				childsorder=[dom_tools,scope.objedit.dom,dom_split,dom_list];
			}else if(docking=="right"){
				childsorder=[dom_tools,scope.objedit.dom,dom_split,dom_list];
			}else if(docking=="top"){
				childsorder=[scope.objedit.dom,dom_split,dom_list,dom_tools];
			}else if(docking=="bottom"){
				childsorder=[dom_tools,scope.objedit.dom,dom_split,dom_list];
			}
			scope.dom.innerHTML="";
			for(var i in childsorder)scope.dom.appendChild(childsorder[i]);
		};
		/**@ignore*/
		this.clear	= function(){
			logs=[];
			dom_list.innerHTML="";
		}; 
		/**@ignore*/
		this.log	= function(msg,level){
			log_line("msg",msg,this.trace_track(1+level||0));
		};
		/**@ignore*/
		this.error	= function(msg,level){
			if(msg&&msg.error&&msg.error.stack){
				log_line("error",msg.message,msg.error.stack.split("\n").join("<br/>"));
			}else{
				log_line("error",msg,scope.trace_track(1+level||0));
			}
			//var trace = this.trace_track(1+level||0);
		};
		build();
	};

	var konsol=null,helper=null;
	var left_pan_switchimg = makedom("img",{src:medias["star"]});
	var left_pan_switch = makedom("div",{className:"YConsole_left_pan_switch"},[left_pan_switchimg]);
	var left_pan_resize = makedom("div",{className:"YConsole_left_pan_resize",innerHTML:""},[]);
	var left_pan = makedom("div",{className:"YConsole_left_pan"},[left_pan_switch,left_pan_resize]);
	var dock_datas={
		lpswitch:{
			left:{
				margin:"marginLeft",
				signs:["<img width='20' src=\""+medias["hang_l"]+"\"/>","<img width='20' src=\""+medias["hang_r"]+"\"/>"]
			},
			right:{
				margin:"marginRight",
				signs:["<img width='20' src=\""+medias["hang_r"]+"\"/>","<img width='20' src=\""+medias["hang_l"]+"\"/>"]
			},
			top:{
				margin:"marginTop",
				signs:["<img width='20' src=\""+medias["hang_t"]+"\"/>","<img width='20' src=\""+medias["hang_b"]+"\"/>"]
			},
			bottom:{
				margin:"marginBottom",
				signs:["<img width='20' src=\""+medias["hang_b"]+"\"/>","<img width='20' src=\""+medias["hang_t"]+"\"/>"]
			}
		},
		docks:[
			{
				node:left_pan,
				defclass:"YConsole_left_pan",
				styles:{
					"left":{
						"width"		: "320px",
						"height"	: "100vh"
					},
					"right":{
						"width"		: "320px",
						"height"	: "100vh"
					},
					"top":{
						"width"		: "100vw",
						"height"	: "320px"
					},
					"bottom":{
						"width"		: "100vw",
						"height"	: "320px"
					}
				}
			},
			{
				node:left_pan_switch,
				defclass:"YConsole_left_pan_switch",
				styles:{
					"left":{
					},
					"right":{
					},
					"top":{
					},
					"bottom":{
					}
				}
			},
			{
				node:left_pan_resize,
				defclass:"YConsole_left_pan_resize",
				styles:{
					"left":{
						left:"320px",
						top:"0px",
		//				"width"		: yconsole.SPLITTER_WIDTH+"px",
						"height"	: "100vh"
					},
					"right":{
						right:"320px",
						top:"0px",
		//				"width"		: yconsole.SPLITTER_WIDTH+"px",
						"height"	: "100vh"
					},
					"top":{
						right:"0px",
						top:"320px",
						"width"		: "100vw"
					},
					"bottom":{
						right:"0px",
						bottom:"320px",
						"width"		: "100vw"
					}
				}
			}
		]
	};
	var switch_state=1;
	var docking="";
	var SWITCHER_SIZE=0;
	
	left_pan_switch.onmouseup=function(){
		switch_state=!switch_state;
		var mprop=dock_datas.lpswitch[docking];
		if(!switch_state){
		//	left_pan_switch.innerHTML=mprop.signs[1];
			
			left_pan.style[mprop.margin]="-"+(left_pan.offsetWidth)+"px";
			left_pan_resize.style.display="none";
		}else{
		//	left_pan_switch.innerHTML=mprop.signs[0];
			
			left_pan.style[mprop.margin]="0px";
			left_pan_resize.style.display="";
		}
	};
	makemover(left_pan_resize,function(dxy){
//		left_pan_resize.style.left=(left_pan_resize.offsetLeft+dxy[0])+"px";
		if(docking=="left"){
			left_pan.style.width=(left_pan.offsetWidth+dxy[0])+"px";
			left_pan_resize.style.left=parseInt(left_pan.style.width)+"px";
		}else if(docking=="right"){
			left_pan.style.width=(left_pan.offsetWidth-dxy[0])+"px";
			left_pan_resize.style.right=parseInt(left_pan.style.width)+"px";
		}else if(docking=="top"){
			left_pan.style.height=(left_pan.offsetHeight+dxy[1])+"px";
			left_pan_resize.style.top=parseInt(left_pan.style.height)+"px";
		}else if(docking=="bottom"){
			left_pan.style.height=(left_pan.offsetHeight-dxy[1])+"px";
			left_pan_resize.style.bottom=parseInt(left_pan.style.height)+"px";
		}
	});
	
	Object.defineProperty(this, "SWITCHER_SIZE", {
		get: function(){return SWITCHER_SIZE;},
		set: function(_SWITCHER_SIZE){
			if(typeof(_SWITCHER_SIZE)=="number"){}
			SWITCHER_SIZE=Math.max(16,_SWITCHER_SIZE);
			left_pan_switchimg.width=SWITCHER_SIZE;
		},
		enumerable : true,
		configurable : true
	});
	Object.defineProperty(this, "TOOLS_SIZE", {
		get: function(){return TOOLS_SIZE;},
		set: function(_TOOLS_SIZE){
			if(typeof(_TOOLS_SIZE)=="number"){
				TOOLS_SIZE=Math.max(16,_TOOLS_SIZE);
				tools_button_rule.style.width=TOOLS_SIZE+"px";
			}
			//left_pan_switchimg.width=SWITCHER_SIZE;
		},
		enumerable : true,
		configurable : true
	});
	//yconsole.SPLITTER_WIDTH
	Object.defineProperty(this, "SPLITTER_WIDTH", {
		get: function(){return SPLITTER_WIDTH+"";},
		set: function(_SPLITTER_WIDTH){
			if(typeof(_SPLITTER_WIDTH)=="number"){
				SPLITTER_WIDTH=Math.max(16,_SPLITTER_WIDTH);
				resize_vertical_rule.style.height=SPLITTER_WIDTH+"px";
				resize_horizontal_rule.style.width=SPLITTER_WIDTH+"px";
			}
		},
		enumerable : true,
		configurable : true
	});
	//yconsole.SPLITTER_WIDTH
	Object.defineProperty(this, "docking", {
		get: function(){return docking+"";},
		set: function(_docking){
			var stylprop=["left","top","right","bottom","width","height","marginLeft","marginRight","marginTop","marginBottom"];
			var docks=dock_datas.docks;
			if(docking!=_docking&&docks[0].styles[_docking]){
				for(var i=0,dock;dock=docks[i];i++){
					for(var j=0,prop;prop=stylprop[j];j++){
						dock.node.style[prop]="";
					}
					for(var j in dock.styles[_docking]){
						dock.node.style[j]=dock.styles[_docking][j];
					}
					dock.node.className=dock.defclass+" "+dock.defclass+"__dock_"+_docking;
				}
				//YConsole_resize_vertical resize_vertical_rule "."+className+"_resize_horizontal"
				left_pan_resize.className+=" "+className+"_resize_"+(_docking=="left"||_docking=="right"?"horizontal":"vertical");
//				left_pan_resize.style[(_docking=="left"||_docking=="right")?"width":"height"]=yconsole.SPLITTER_WIDTH+"px";
		//		alert(yconsole.SPLITTER_WIDTH);
				
				docking=_docking+"";
				if(konsol)konsol.updateDocking();
		//	left_pan_switch.innerHTML=dock_datas.lpswitch[docking].signs[0];
				console.log("set console docking to "+docking);
			}
		},
		enumerable : true,
		configurable : true
	});
	
	var old_log=null;
	/**
	* Call to activate the console so it can begin to intercept errors and console logs.
	*/
	this.activate=function(){
		if(!konsol){
			konsol=new Konsol();
			if(!dock_datas.docks[0].styles[this.docking])this.docking="left";
			if(SWITCHER_SIZE==0)this.SWITCHER_SIZE=20;
			old_log=console.log;
			console.log=function(){
				//var args = Array.prototype.concat.apply([],arguments);
				
				old_log.apply(console,arguments);
				konsol.log(arguments);
				window.addEventListener("error",konsol.error,true);
			};
			left_pan.appendChild(konsol.dom);
			helper=new Helper();
			left_pan.appendChild(helper.dom);
		}
	};
	/**
	* Call to show the console.<br/>
	* Activates the console if necessary.
	*/
	this.show=function(){
		this.activate();
		runorwait(function(){
			if (typeof (MSApp) != "undefined") {
				// autrement windows bloque l'injection
				MSApp.execUnsafeLocalFunction(function () {
					document.body.appendChild(left_pan);
				});
			} else {
				document.body.appendChild(left_pan);
			}
		});
	};
	/**
	* Call to hide the console.<br/>
	*/
	this.hide=function(){
		if(konsol){
			document.body.removeChild(left_pan);
		}
	};
	
}();

/* ------------------------------- ] YConsole.js ------------------------------- */

