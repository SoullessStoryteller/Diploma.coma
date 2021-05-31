<!DOCTYPE html>
<html lang="ru" dir="ltr" class="overflow-x-hidden">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    
    <title>Абитуриентам</title>
</head>

<body class="w-100">
    
<!-- Шапка -->
<div class="main-block" style="background-image: url(images/Group%20836.png)">
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="Index.php">Специальности</a>
        </li>        
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="Index.php">Партнёры</a>
        </li>        
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="AboutCollege.php">О колледже</a>
        </li>        
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="Abiturients.php">Абитуриентам</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<!-- Шапка - конец -->
    
<!-- Блок с фоном -->
<div style="margin: 0px 160px">
            <div class="row">
                <div class="col justify-content-center">
                    <p style="color: white; font-size: 44px">Поступаешь в следующем году?</p>
                    <p style="color: white; font-size: 44px; padding-bottom: 100px">Хорошие новости - <br> ты на верном пути!</p>
                    <input class="submit-button" type="button" value="Отправить заявку"/>
                </div>
            </div>
        </div>    
    </div>
<!-- Блок с фоном - конец -->
    
<!-- Блок заявки -->
    <div class="container-fluid " style="overflow-x: hidden">
        <div class="block_info text-center">
            <div class="send" style="margin-bottom: 100px;">
                <h2 style="color: white; font-size: 58px; margin-bottom: 80px; margin-top: 120px">Подать заявку</h2>
                <form action="">
                    <input class="send_field" placeholder="ФИО" type="text">
                    <input class="send_field" placeholder="Телефон" type="text">
                    <input class="send_field" placeholder="E-MAIL" type="text">
                    <select class="send_field" name="specialty-choice" placeholder="Выберите специальность">
                        <option selected value="09.02.07">Выберите специальность</option>
                        <option class="send_field" value="09.02.07">Информационные системы и программирование</option>
                        <option class="send_field" value="09.02.06">Сетевое и системное администрирование</option>
                        <option class="send_field" value="15.02.10">Мехатроника и мобильная робототехника</option>
                    </select>
                    <input class="send_field" placeholder="В каком классе Вы обучаетесь?" type="text"><br>
                    <input class="submit-button" type="Submit" class="mt-5" value="Отправить" style="border: 2px solid #0078B8;"/>
                </form>
            </div>
        </div>
    </div>
<!-- Блок заявки - конец -->    
</body>
</html>