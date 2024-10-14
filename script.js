function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '0px' || sidebar.style.width === '') {
        sidebar.style.width = '250px';  // Open sidebar
    } else {
        sidebar.style.width = '0px';  // Close sidebar
    }
}