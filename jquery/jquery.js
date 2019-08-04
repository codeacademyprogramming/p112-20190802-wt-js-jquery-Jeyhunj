$(function () {

    

    $("body").prepend("<nav>")


    $("#script").after(`<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>`)

    $("nav").addClass("navbar navbar-expand-lg navbar-dark bg-dark fixed-top")

    $("nav").prepend(`<div class="container">
    <a class="navbar-brand" href="#">Start Bootstrap</a>
    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse" id="navbarResponsive" style="">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>`);

    $("nav").after("<div class = t>")
    $(".t").addClass("container")
    $(".t").prepend(`

  <header class="jumbotron my-4">
    <h1 class="display-3">A Warm Welcome!</h1>
    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
    <a href="#" class="btn btn-primary btn-lg">Call to action!</a>
  </header>
  
`)

$("header").after(`<div class="row text-center">
<div class="col-lg-3 col-md-6 mb-4">
  <div class="card h-100">
    <img class="card-img-top" src="http://placehold.it/500x325" alt="">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
    </div>
    <div class="card-footer">
      <a href="#" class="btn btn-primary">Find Out More!</a>
    </div>
  </div>
</div>

<div class="col-lg-3 col-md-6 mb-4">
  <div class="card h-100">
    <img class="card-img-top" src="http://placehold.it/500x325" alt="">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
    </div>
    <div class="card-footer">
      <a href="#" class="btn btn-primary">Find Out More!</a>
    </div>
  </div>
</div>

<div class="col-lg-3 col-md-6 mb-4">
  <div class="card h-100">
    <img class="card-img-top" src="http://placehold.it/500x325" alt="">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
    </div>
    <div class="card-footer">
      <a href="#" class="btn btn-primary">Find Out More!</a>
    </div>
  </div>
</div>

<div class="col-lg-3 col-md-6 mb-4">
  <div class="card h-100">
    <img class="card-img-top" src="http://placehold.it/500x325" alt="">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
    </div>
    <div class="card-footer">
      <a href="#" class="btn btn-primary">Find Out More!</a>
    </div>
  </div>
</div>

</div>`)

$(".t").after("<footer>")
$("footer").addClass("py-5 bg-dark")
$("footer").prepend(`<div class="container">
<p class="m-0 text-center text-white">Copyright © Your Website 2019</p>
</div>`)


$("body").css("padding-top", "56px")

});

