<template>
  <div class="sidebar">
    <div class="logo">Demo Test</div>
    <ul class="menu">
      <li class="menu-item">
        <a href="#" class="profile-link">
          <img src="@/assets/images/user.png" alt="Profile Icon" class="icon"> Profile
        </a>
      </li>
      <li class="menu-item">
        <a href="#" class="vehicles-link">
          <img src="@/assets/images/vehicle.png" alt="Vehicles Icon" class="icon"> Vehicles
        </a>
      </li>
      <li class="menu-item">
        <a href="#" class="settings-link">
          <img src="@/assets/images/settings.png" alt="Settings Icon" class="icon"> Settings
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  width: 16rem;
  height: 100vh;
  background-color: #282828;
  color: #fff;
}

.logo {
  padding: 1.8rem;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 100%;
  color: #fff;
  margin-bottom: 4rem;
}

.menu {
  list-style-type: none;
  padding: 0;
}

.menu li {
  padding-left: 0;
  margin-bottom: 1rem;
}

.menu li a {
  display: flex;
  align-items: center;
  padding:0.8rem 2.2rem;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.45);
  border-left: 2px solid transparent;
  transition: color 0.3s, border-left-color 0.3s, background-color 0.3s;
}

.menu li a .icon {
  width: 24px;
  height: 24px;
  margin-right: 20px;
  transition: filter 0.3s;
}

.menu li:nth-child(2) a {
  color: #fff;
  background-color: #535353;
  border-left-color: #D90E32;
}

.menu li a:hover {
  color: #fff;
  background-color: #535353;
  border-left-color: #D90E32;
}

.menu li a:hover .icon {
  filter: brightness(0) invert(1);
}
</style>
