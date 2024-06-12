<template>
  <div class="vehicle-filter">
    <div class="filter-block">
      <div class="input-container">
        <input type="text" placeholder="Search VIN" class="filter-input" />
        <img src="@/assets/images/zoom.svg" alt="Search Icon" class="search-icon" />
      </div>

      <label class="vehicles-page-label" for="vehicles-per-page">Select vehicles per page:</label>
      <select id="vehicles-per-page" class="vehicles-page-select">
        <option value="9">9</option>
        <option value="8">8</option>
      </select>
    </div>

    <button class="vehicle-add-button">
      <img src="@/assets/images/plus.svg" alt="Plus Icon" class="plus-icon" />
      Add Vehicle
    </button>
  </div>
</template>

<style scoped>
.vehicle-filter {
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.filter-block {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.input-container {
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 32px;
}

.filter-input {
  border: 1px solid #e4e4e4;
  border-radius: 0.5rem;
  width: 22.12rem;
  height: 2.62rem;
  font-weight: 400;
  font-size: 1rem;
  color: rgba(41, 49, 72, 0.8);
  padding-left: 16px;
  padding-right: 2.5rem;
}

.search-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 1.5rem;
  height: 1.5rem;
}

.vehicles-page-label {
  font-size: 1rem;
  color: #293148;
  margin-right: 16px;
}

.vehicles-page-select {
  padding: 0.5rem;
  border: 1px solid #e4e4e4;
  border-radius: 0.5rem;
  height: 2.62rem;
  width: 4.4rem;
  font-weight: 400;
  font-size: 1rem;
  color: rgba(41, 49, 72, 0.8);
}

.vehicle-add-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.62rem;
  width: 11.25rem;
  height: 2.62rem;
  box-shadow: 0 8px 24px rgba(217, 14, 50, 0.12);
  background: #d90e32;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: #fff;
  border: none;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;
}

.plus-icon {
  position: absolute;
  left: 10px;
  width: 1rem;
  height: 1rem;
}

.vehicle-add-button:hover {
  background-color: #b9102f;
}
</style>
