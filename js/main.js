<script type="text/javascript">
    
ul:not(.menu) {
  overflow: hidden;
  max-height: 0;
  transition: 0.5s ease-out;
}

li:hover>ul {
  max-height:100vh;
  transition: 0.5s ease-in;
}

function submition(){
    $.ajax({
        url:"php/application.php";
        type:'POST';
        
    })
}

function showHide() {
                //Если элемент с id-шником infolist существует
                if (document.getElementById(infolist)) { 
                    //Записываем ссылку на элемент в переменную obj
                    var obj = document.getElementById(infolist); 
                    //Если css-свойство display не block, то: 
                    if (obj.style.display != "block") { 
                        obj.style.display = "block"; //Показываем элемент
                    }
                    else obj.style.display = "none"; //Скрываем элемент
                }
                //Если элемент с id-шником element_id не найден, то выводим сообщение
                else alert("Элемент с id: " + infolist + " не найден!"); 
            }
</script>