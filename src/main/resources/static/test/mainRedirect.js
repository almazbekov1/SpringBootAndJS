



function MainRedirect() {
    console.log('я делаю редирект');
    setTimeout(redirectPage, 50);
}
function redirectPage() {
    document.location.href = 'admin.html'
}