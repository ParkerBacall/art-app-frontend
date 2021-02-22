<template>
<div id="myModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <div class="modal-header-container">
    <h1>Welcome to Artify</h1>
    </div>
    <div class="modal-body-container">
    <p>Some aspects of this page are currently under construction. Please feel free to browse around.</p>
    </div>
  </div>

</div>
</template>

<script>
export default {
    name: 'WelcomeModal'
}


</script>

<style>
.modal {
  display: block; 
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
}

.modal-header-container{
    display:flex;
    justify-content: center;
    width:100%;
}

.modal-body-container{
    display:flex;
    justify-content: center;
    width:100%;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 80%; 

}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>