<template>
<div class="welcome-modal" @click="closeModalWindow">
  <div class="modal-content">
    <span class="close"  @click="closeModal">&times;</span>
    <div class="modal-header-container">
    <h1>Welcome to Artify</h1>
    </div>
    <div class="modal-body-container">
    <p class="modal-description">Click on an artist or genre to add it to your favorites. Navigate to explore to view a feed of artist curated personally for you! Additional functionality coming soon!</p>
    <div class="modal-btn-container">
       <button class="modal-btn" @click="closeModal">Ok</button>
    </div>
    </div>
  </div>

</div>
</template>

<script>
  export default {
      name: 'WelcomeModal',

      methods:{
      closeModalWindow(event){
       const modal = document.querySelector('.welcome-modal')
       if (event.target == modal){
          modal.style.display="none"
       }
      },
      closeModal(){
        document.querySelector('.welcome-modal').style.display='none'
      }
   }
  }
  

</script>

<style>
.welcome-modal {
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
  padding:20px;
  padding-bottom:40px;
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
.modal-body-container{
  width:100%;
  display:flex;
  justify-content: center;
  flex-direction: column;

}
.modal-description{
  width:100%;
  text-align: center;
}
.modal-btn-container{
  width:100%;
  display:flex;
  justify-content: center;
}
.modal-btn{
  background-color:cadetblue;
  border:none;
  border-radius: 5px;
  width:50px;
  height:30px;
}
.modal-btn:hover{
  cursor:pointer;
  background-color:rgb(66,123,124);
  
  
}
  @media only screen and (max-width: 600px) {
    .modal-content {
      margin-top:50%;
   }
  }
</style>