<template>
    <div class="pagination">
      <div class="pagination-info">Showing 9 out of 256</div>
      <div class="pagination-controls">
        <button class="pagination-control">
          <img src="../assets/images/chevron_left.svg" alt="arrow left">
        </button>
        <input type="text" class="pagination-input" placeholder="9"/>
        <div class="pagination-separator">of</div>
        <input type="text" class="pagination-input" placeholder="28"/>
        <button class="pagination-control">
          <img src="../assets/images/chevron_right.svg" alt="arrow right">
        </button>
      </div>
    </div>
  </template>
  
  <style scoped>
  .pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
  }
  
  .pagination-info , .pagination-separator {
    font-weight: 400;
font-size: 1rem;
color: rgba(41, 49, 72, 0.8);
  }
  
  .pagination-controls {
    display: flex;
    align-items: center;
  }
  
  .pagination-control {
    margin: 0 5px;
    padding: 0.25rem 0.5rem;
    background-color: #f3f6f8;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    color: #293148;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
  
  .pagination-input {
    padding: 0.25rem;
    margin:15px;
    text-align: center;
    border: 1px solid #e4e4e4;
border-radius: 0.38rem;
width: 2rem;
height: 2rem;
color: rgba(41, 49, 72, 0.8);
  }
  
  .pagination-separator {
    margin: 0 5px;
  }
  </style>
