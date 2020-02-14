if (localStorage.getItem('token') == '' || localStorage.getItem('token') == undefined || localStorage.getItem('token') == null || !!localStorage.getItem('token')) {
    location.href = '../../404.html'
}