<template>
  <nav>
    <router-link :to="'home'">
      <img src="../assets/logo.png" alt="Logo de la barra de navegación"/>
    </router-link>
    <input id="input-menu" type="checkbox" />
    <label class="hamburguer-icon" for="input-menu">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <ul class="items-nav">
      <li><router-link :to="'home'">HOME</router-link></li>
      <li><router-link :to="'login'">LOGIN</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$background-color: linear-gradient(to right, #11998e, #38ef7d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
;
$duracion-estandar: 1s;
nav {
  position: sticky;
  background: $background-color;
  z-index: 1;
  width:100%;
  top:0;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
}  

@media screen and (max-width: 850px) {

  nav{
    .hamburguer-icon {
      position: relative;
      user-select: none;
      cursor: pointer;
      margin: 0.625rem 1rem 0rem 0rem;
  
      span {
        width: 1.7rem;
        height: 0.2rem;
        position: relative;
        display: block;
        margin-top: 0.18rem;
        background-color: whitesmoke;
        border-radius: 3px;
        transition: transform $duracion-estandar ease-out;
      }
    }
    
    #input-menu {
      display: none; /*DESAPARECER INPUT, SOLO USAREMOS SU FUNCION CHECKED*/
       
      /*ANIMACION BOTON DE HAMBURGUESA SE CONVIERTE EN  X*/
      &:checked ~ .hamburguer-icon span {
        opacity: 1;
        transform: rotate(45deg) translate(-3px, -1px);
      }
    
      &:checked ~ .hamburguer-icon span:nth-last-child(3) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }
    
      &:checked ~ .hamburguer-icon span:nth-last-child(2) {
        opacity: 1;
        transform: rotate(-45deg) translate(-3px, 1px);
      }
  
      /*Cambiar altura a 40vh y poder visualizar  las opciones
      del menu */
  
      &:checked ~ .items-nav {
        height: 40vh;
      }
    
      &:checked ~ .items-nav li a {
        opacity: 1;
      }
          
    }

    a{
      img {
        width: 1.5rem;
        height: 1.5rem;
        margin: 0.625rem 0 0.625rem 1rem;
      }
    }
  
    .items-nav {
      list-style: none;
      padding-left: 1rem;
      width: 100%;
      height: 0vh; /* PROPIEDAD MODIFICADA AL PRESIONAR EL CHECKBOX */
      overflow: hidden; /* PERMITE QUE SE ESCONDA DADO QUE LA ALTURA ES 0 */
      background: $background-color;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      transition-delay: $duracion-estandar;
      transition: height $duracion-estandar ease-out;
      
      li a {
        color: whitesmoke;
        opacity: 0;
        transition: opacity 0.5s ease-out;
        text-decoration: none;
  
          &:hover{
            border-bottom: white solid 2px;
          }
      }  
    }
  }
}

/*Navbar pantallas mayores a 850PX , medianas-grandes y grandes*/

@media screen and (min-width: 850px) {
  nav {   
    padding: 	1.375rem 6.25rem 0 6.25rem;
  
    .hamburguer-icon span {
      display: none; /*ESCONDER MENU HAMBURGUESA*/
    }

    #input-menu {
      display: none;
    }

    a{
        img {
        width: 2.25rem;
        height: 2.25rem;
        margin: 0 0 0.625rem 1rem;      
      }
    }


    .items-nav {
      padding-top: 0.25rem;
     


      li {
        display: inline-flex;
        margin-left: 3rem;

        a{
          color: whitesmoke;
          text-decoration: none;
         }
      } 
    }
  }
}
</style>
