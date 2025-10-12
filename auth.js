// // Authentication system using localStorage
// class AuthSystem {
//   constructor() {
//     this.storageKey = "marketHubAuth"
//     this.userKey = "marketHubUser"
//   }

//   // Check if user is logged in
//   isLoggedIn() {
//     return localStorage.getItem(this.storageKey) === "true"
//   }

//   // Get current user data
//   getCurrentUser() {
//     const userData = localStorage.getItem(this.userKey)
//     return userData ? JSON.parse(userData) : null
//   }

//   // Login user
//   login(email, password) {
//     // In a real app, this would validate against a backend
//     // For demo purposes, we'll accept any non-empty credentials
//     if (email && password) {
//       const user = {
//         email: email,
//         name: email.split("@")[0],
//         loginTime: new Date().toISOString(),
//       }
//       localStorage.setItem(this.storageKey, "true")
//       localStorage.setItem(this.userKey, JSON.stringify(user))
//       return true
//     }
//     return false
//   }

//   // Register user
//   register(userData) {
//     // In a real app, this would send data to backend
//     // For demo purposes, we'll just store it
//     if (userData.email && userData.password) {
//       const user = {
//         email: userData.email,
//         name: `${userData.firstName} ${userData.lastName}`,
//         phone: userData.phone,
//         registeredAt: new Date().toISOString(),
//       }
//       localStorage.setItem(this.storageKey, "true")
//       localStorage.setItem(this.userKey, JSON.stringify(user))
//       return true
//     }
//     return false
//   }

//   // Logout user
//   logout() {
//     localStorage.removeItem(this.storageKey)
//     localStorage.removeItem(this.userKey)
//   }

//   // Require authentication - redirect if not logged in
//   requireAuth() {
//     if (!this.isLoggedIn()) {
//       // Store the current page to redirect back after login
//       localStorage.setItem("redirectAfterLogin", window.location.href)
//       window.location.href = "sign-in.html"
//       return false
//     }
//     return true
//   }

//   // Update navigation based on auth state
//   updateNavigation() {
//     const isLoggedIn = this.isLoggedIn()
//     const user = this.getCurrentUser()

//     // Find all navigation menus
//     const navMenus = document.querySelectorAll(".navbar-nav")

//     navMenus.forEach((nav) => {
//       // Find the sign in button/link
//       const signInItem = nav.querySelector("li:last-child")

//       if (isLoggedIn && user) {
//         // Show user menu with logout
//         signInItem.innerHTML = `
//                     <div class="dropdown">
//                         <button class="btn btn-primary dropdown-toggle ms-3" type="button" data-bs-toggle="dropdown">
//                             ${user.name || user.email}
//                         </button>
//                         <ul class="dropdown-menu dropdown-menu-end">
//                             <li><a class="dropdown-item" href="#">Tài khoản của tôi</a></li>
//                             <li><a class="dropdown-item" href="#">Đơn hàng</a></li>
//                             <li><hr class="dropdown-divider"></li>
//                             <li><a class="dropdown-item" href="#" onclick="auth.logout(); window.location.href='index.html';">Đăng xuất</a></li>
//                         </ul>
//                     </div>
//                 `
//       } else {
//         // Show sign in button
//         signInItem.innerHTML = `
//                     <a href="sign-in.html" class="btn btn-primary ms-3">Đăng Nhập</a>
//                 `
//       }
//     })
//   }
// }

// // Create global auth instance
// const auth = new AuthSystem()

// // Initialize auth on page load
// document.addEventListener("DOMContentLoaded", () => {
//   auth.updateNavigation()
// })
