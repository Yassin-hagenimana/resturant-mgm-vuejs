<template>
<div>

   <br><br> <br>
<h2>{{title}}</h2>
    <body>
   <div id="body" title="head boy">
    <p>hagenimana yassin <br>software engneer</p>
    <img src="../assets/20200205_095323.jpg" alt="RCA">
   </div>
   <div id="body">
   <p>hagenimana yassin <br>software engneer</p>
   <img src="../assets/20200205_095323.jpg" alt="RCA">
   </div>
   <div id="body">
  <p>hagenimana yassin <br>software engneer</p>
  <img src="../assets/20200205_095323.jpg" alt="RCA">
   </div>
   <div id="body">
    <p>hagenimana yassin <br>software engneer</p>
    <img src="../assets/20200205_095323.jpg" alt="RCA">
   </div>
   <p id="lorem">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque maxime nisi provident in ipsam enim, veniam praesentium ut ea ab numquam dicta corrupti? Dolore, fuga ratione natus cumque odio facilis.
   Voluptatum odit veniam ducimus dolore possimus ratione, perferendis magni accusamus eos blanditiis. Aspernatur consequatur ex ad. Delectus nostrum molestiae adipisci, fugiat eveniet, dolorum obcaecati quos nam, possimus deleniti nobis fuga?
   Sunt, iusto minima nostrum nemo exercitationem laudantium nesciunt fugit repudiandae accusantium natus, harum asperiores placeat dicta beatae dignissimos rerum iure! Suscipit totam modi, possimus id cumque eum? Illum, maiores alias!</p>
   </body>

</div>
</template>

<script>
// import Header from '../components/header'
export default {
  data () {
    return {
      title: 'Vue js applicatin'
    }
  }
}
</script>

<style scoped>
table{
  border: 1px solid black;
}
img{
  width: 12em;
  margin-left: 10em;
}
 body{
  border: 1px solid black;
 }
 p{
     text-align: center;
     font-size: 2em;
     color: blueviolet;
 }
 #body{
     border: 1px solid blueviolet;
     width: 500px;
     padding: 1em;
     margin: 2em;
     display: inline-block;
     font-family: 'Nunito semiBold';
 }
 #body:hover{
 box-shadow: 0px 0px 4px 4px;
 opacity: 0.5;
 transition: 1s;
 border-radius: 3px;
 border: 1px solid rgb(245, 240, 240);
 }
 #body p{
     text-transform:capitalize;
     font-size: 1em;
     color: rgb(94, 94, 94);
 }
 #lorem{
   text-align: justify;
   margin: 1em;
   color: black;
   font-size: 25px;
 }
 h2{
   color: blueviolet;
   text-align: center;
   text-transform: capitalize;
 }
</style>
