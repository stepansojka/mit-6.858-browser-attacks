# mit-6.858-browser-attacks
browser-based attacks for the MIT OCW 6.858 lab (XSS, CSRF, etc..)

## Cookie Stealer
The cookie_stealer.js script generates a URL that exploits XSS vulnerability in the zoobar app.

First, run the server:
```
node server.js
```
Then, log into the zoobar app. Finally, point browser to the attack URL as follows:
```
chromium-browser  (node cookie_stealer.js)
```
(the above is for fish shell).

