<template>
  <div class="projects">
    <div class="container">
      <h1 class="mb-5">
        <strong>Our Projects </strong>
      </h1>
      <div class="row">
        <div class="col-md-6">
          <ProjectCard>
            <canvas
              id="my-logo"
              width="200"
              height="300"
              style="margin-bottom: 20px"
            ></canvas>
            <h3>
              <strong> Project Logo</strong>
            </h3>
            <p>Logo Diatas Digambar Menggunakan HTML5 Canvas !</p>
          </ProjectCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  mounted() {
    const canvas = document.getElementById("my-logo");
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "#C50011";
    ctx.moveTo(50, 80);
    ctx.lineTo(50, 130);
    ctx.lineTo(75, 160);
    ctx.lineTo(120, 155);
    ctx.lineTo(50, 80);
    ctx.closePath();
    ctx.fill();
    // ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "#C50011";
    ctx.moveTo(100, 20);
    ctx.lineTo(153, 80);
    ctx.lineTo(150, 130);
    ctx.lineTo(100, 72);
    ctx.closePath();
    ctx.fill();
    // ctx.stroke();

    // Bottom right
    ctx.beginPath();
    ctx.fillStyle = "#FF0021";
    ctx.moveTo(153, 80);
    ctx.lineTo(153, 130);
    ctx.lineTo(120, 160);
    ctx.lineTo(75, 160);
    ctx.closePath();
    ctx.fill();
    // ctx.stroke();

    // Top left
    ctx.beginPath();
    ctx.moveTo(100, 20);
    ctx.lineTo(50, 80);
    ctx.lineTo(50, 130);
    ctx.lineTo(123, 48);
    ctx.closePath();
    ctx.fillStyle = "#FF0021";
    ctx.fill();
    // ctx.stroke();

    ctx.fillStyle = "red";
    ctx.rect(75, 170, 46, 120);
    ctx.fillStyle = "red";
    ctx.fill();
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.moveTo(100, 20);
    // ctx.lineTo(100, 160);
    // ctx.stroke();
  },
  components: {
    ProjectCard,
  },
};
</script>
