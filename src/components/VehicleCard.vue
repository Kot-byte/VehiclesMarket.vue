<template>
  <div class="vehicle-card">
    <img :src="vehicle.preview || 'default-image-path.jpg'" alt="Vehicle Image" />
    <h3>Mercedes-Benz C-Class</h3>
    <p class="vehicle-number">WDB 1400321A333419</p>
    <hr>
    <div class="vehicle-info">
      <div class="vehicle-col">
        <img src="../assets/images/arrow.svg" alt="arrow" class="vehicle-col-img">
        <p class="vehicle-col-text">30/30</p>
      </div>
      <p class="vehicle-days">3 days left</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vehicle: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.vehicle-card {
  padding: 25px;
  margin: 10px;
  text-align: left;
  border-radius: 0.55rem;
  width: clamp(200px, 30%, 400px);
  height: auto;
  border: none;
  background: #f3f6f8;
  position: relative;
  transition: width 0.2s ease-in-out;
}

.vehicle-card::after {
  content: url('/src/assets/images/more_horizontal.svg');
  position: absolute;
  top: 7px;
  right: 15px;
  width: 24px;
  height: 24px;
}

.vehicle-card img {
  max-width: 100%;
  height: auto;
  border-radius: 0.4rem;
  margin-bottom: 15px;
}

h3 {
  margin-bottom: 12px;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 110%;
  color: #293148;
}

.vehicle-number {
  font-weight: 500;
  font-size: 0.94rem;
  color: rgba(41, 49, 72, 0.6);
}

.vehicle-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}

.vehicle-col {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 0.38rem;
  width: 5.81rem;
  height: 1.88rem;
  background: #E4F5DD;
  font-weight: 700;
  font-size: 0.94rem;
  color: #7fc75e;
}

.vehicle-col .vehicle-col-img {
  width: 16px;
  height: 16px;
  padding: 0;
  margin: 0;
}

.vehicle-days {
  font-weight: 500;
  font-size: 0.94rem;
  text-align: right;
  color: rgba(41, 49, 72, 0.6);
}

@media (max-width: 1670px) {
  .vehicle-card {
    width: clamp(350px, 80%, 20%);
  }
}

@media (max-width: 1500px) {
  .vehicle-card {
    width: clamp(200px, 80%, 25%);
  }
}

@media (max-width: 600px) {
  .vehicle-card {
    width: clamp(200px, 80%, 100%);
  }
}
</style>

