# notif
A small snippet for implementing a basic popup notification so that you can just copy-paste and use.

It is just a javascript implementation which allows you to call a popup message by calling a function.
No additional html elements required except a ```<script>``` tag for referencing the js and a ```<link>``` tag to reference the default css styling provided in the repo.

#### The repo contains a demo webpage. Check it out!

### Usage

#### The code requires jQuery to work properly. Import that before using
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> 
//this was the latest one at the time
```
#### The code
```
<link rel="stylesheet" type="text/css" href="notif.css" > <!-- import the default css -->
```
```
<script src="notif.js"></script> <!-- import the js -->
```
```
notif([message_text], [button_text], [button_target_url]); //run the code
```
The only necessary parameter is the ```[message_text]```, the rest are optional.
#### NOTE
If you parse in ```[button_text]``` and not the ```[button_target_url```, the button will appear but will have an empty href.

Feel free to alter the files to fit your purposes.
You can change the styling as per your liking, there are not many elements in the popup so it won't be very time-consuming.
It'd be great if you could put a link to this repo somewhere in your website so that other people could also benefit.
