<template>
  <header class="header">
    <div class="header-title">
      <h1 class="title">Vehicles</h1>
      <div class="col">256</div>
    </div>
    
    <div class="header-profile">
      <div class="profile-add">
        <img src="@/assets/images/headerAdd.svg" alt="Add Icon" class="profile-add-img">
      </div>
      <div class="profile-photo-container">
        <img src="@/assets/images/Photo.svg" alt="Profile Photo" class="profile-photo">
        <p class="profile-name">John Doe</p>
      </div>
      <div class="profile-info">
        <img src="@/assets/images/uk.svg" alt="Flag" class="flag">
        <select class="language-select">
          <option value="ru">En</option>
          <option value="en">Ru</option>
        </select>
      </div>
    </div>  
  </header>
</template>

<script>
export default {
  name: 'HeaderMenu'
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 1rem;
  background-color: #FFF;
  color: #293148;
  border-bottom: 1px solid #E4E4E4;
  margin-bottom: 6px;
  padding: 30px;
}

.header-title {
  display: flex;
  align-items: center;
}

.title {
  font-weight: 700;
  font-size: 2rem;
  line-height: 119%;
  color: #293148;
  padding-right: 18px;
}

.col {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.38rem;
  width: 3.5rem;
  height: 1.88rem;
  background: #f3f6f8;
  font-weight: 700;
  font-size: 0.94rem;
  text-align: center;
  color: rgba(41, 49, 72, 0.8);
}

.header-profile {
  display: flex;
  align-items: center;
  gap: 35px;
}

.profile-add {
  display: flex;
  justify-content: center; /* Центрирование по горизонтали */
  align-items: center; /* Центрирование по вертикали */
  width: 2.625rem;
  height: 2.625rem;
  padding-top: 5px;
}

.profile-add-img {
  width: 2.4rem;
  height: 2.4rem;
}

.profile-photo-container {
  display: flex;
  align-items: center;
}

.profile-photo {
  width: 2.875rem;
  height: 2.875rem;
  border-radius: 50%;
  margin-right: 10px; /* Отступ справа от изображения */
}

.profile-name {
  font-size: 1rem;
  color: #293148;
}

.profile-info {
  display: flex;
  align-items: center;
}

.flag {
  width: 1.406rem;
  height: auto;
  margin-right: 1rem;
}

.language-select {
  padding: 0.25rem;
  border: none;
  background-color: transparent;
}

.profile-name,
.language-select {
  font-weight: 500;
  font-size: 0.94rem;
  color: #293148;
}
</style>
