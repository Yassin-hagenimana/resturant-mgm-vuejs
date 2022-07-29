<template>
<div>
    <footer>
   <p>{{footer}}</p>
   </footer>
</div>
</template>

<script>

export default {

  el: '#app',

  data: function () {
    return {
      footer: '@copyright yassin 2020'
    }
  }
}
</script>

<style scoped>
p{
font-family: cursive;
font-size: 30px;
text-align: center;
color: lightgreen;
color: white;

}
footer{
  background: rgb(98, 77, 172);
    padding: 10px;
    margin: -6px;
}
</style>
