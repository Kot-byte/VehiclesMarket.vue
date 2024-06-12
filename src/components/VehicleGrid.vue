<template>
  <div class="vehicle-grid">
    <div v-if="cars.length === 0">Загрузка...</div>
    <VehicleCard v-for="vehicle in cars" :key="vehicle.id" :vehicle="vehicle" />
  </div>
</template>

<script>
import axios from 'axios';
import VehicleCard from './VehicleCard.vue';

export default {
  components: {
    VehicleCard,
  },
  data() {
    return {
      cars: [],
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

<style scoped>
.vehicle-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.vehicle-grid img {
  max-width: 100%;
  height: auto;
  border-radius: 0.4rem;
  margin-bottom: 15px;
}
</style>
