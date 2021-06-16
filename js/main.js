function submition() {
    let fullname = document.getElementById("fullname");
        console.log(fullname.value)
    let phone = document.getElementById("phone");
        console.log(phone.value);
    let email = document.getElementById("email");
        console.log(email.value)
    let specialty = document.getElementById("specialty_choice");
        console.log(specialty.value)
    let classnum = document.getElementById("classnum");
        console.log(classnum.value)
    if ((fullname.value && phone.value && email.value) != '') {
        window.alert("Заявка успешно отправлена.")
        $.ajax({
            type: 'POST',
            url: 'php/application.php',
            dataType: 'json',
            data: {
                fullname: $('#fullname').val(),
                phone: $('#phone').val(),
                email: $('#email').val(),
                specialty: $('#specialty_choice').val(),
                classnum: $('#classnum').val(),
            },
            success: function (data) {
                console.log(data)

                //                    $("#message").html(data)

            }
        })
    } else {
        //        document.getElementById("message").innerHTML = "Для того чтобы оставить отзыв заполните все поля";
        window.alert("Ошибка! Заполните все поля чтобы отправить заявку.")
    }
}

function showHide(infolist) {
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

function showHide(infolist) {
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

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});