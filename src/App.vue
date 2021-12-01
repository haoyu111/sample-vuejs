<template>
  
  <h1 style="text-align:center;color:blue;"> Ryerson University</h1>
  <div class="box">
    <h2>Introduction</h2>
    <div id="intro">
      <p>{{ message }}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.box{
  width:100%;
  border: 1px solid black;
}

var myObject = new Vue({
    el: '#intro',
    data: {message: 'Ryerson University (colloquially referred to as Ryerson, RyeU or RU) is a public research university located in Toronto, Ontario, Canada. The university's core campus is situated within the Garden District, although it also operates facilities elsewhere in Toronto. The university operates seven academic divisions/faculties, the Faculty of Arts, the Faculty of Communication and Design, the Faculty of Community Services, the Faculty of Engineering and Architectural Science, the Faculty of Science, the Lincoln Alexander School of Law, and the Ted Rogers School of Management. Many of these faculties are further organized into smaller departments and schools. The university also provides continuing education services through the G. Raymond Chang School of Continuing Education.'}
})

</style>
