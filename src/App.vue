<template>
  <div id="app">
    <div class="container">
      <div class="sidebar">
        <SidebarMenu />
        <img src="../src/assets/images/backgroung.png" alt="backgroung" class="background-img">
      </div>
      <div class="content">
        <HeaderMenu />
        <VehicleFilter v-model="search" />
        <div class="vehicle-grid">
          <div v-if="cars.length === 0">Loading...</div>
          <VehicleCard v-for="vehicle in cars" :key="vehicle.id" :vehicle="vehicle" />
        </div>
        <VehiclePagination />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarMenu from './components/SidebarMenu.vue';
import HeaderMenu from './components/HeaderMenu.vue';
import VehicleFilter from './components/VehicleFilter.vue';
import axios from 'axios';
import VehicleCard from './components/VehicleCard.vue';
import VehiclePagination from './components/VehiclePagination.vue';

export default {
  components: {
    SidebarMenu,
    HeaderMenu,
    VehicleFilter,
    VehicleCard,
    VehiclePagination,
  },
  data() {
    return {
      cars: [],
      search: '',
    };
  },
  mounted() {
    this.fetchCars();
  },
  methods: {
    fetchCars() {
      axios.get('https://api.caiman-app.de/api/cars-test?search=2323&per_page=1000&page=1')
        .then(response => {
          const data = response.data.data;
          const vehicles = Array(9).fill(data[0]);
          this.cars = vehicles;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex: 1;
}

.sidebar {
  width: 256px;
  background-color: #282828;
  color: #fff;
  position: relative;
}

.background-img{
  position: absolute;
  bottom: 0;
  left:0;
}

.content {
  flex: 1;
}
.vehicle-grid{
  margin-bottom: 32px;
}
</style>
