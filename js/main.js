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