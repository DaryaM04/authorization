class Autorization{
    constructor(error, inputUser, inputPassword, userName, userPessword, button){
      this.error = error; 
      this.inputUser = inputUser;
      this.inputPassword = inputPassword;
      this.userName = userName;
      this.userPessword = userPessword;
      this.button = button;
      this.textError = JSON.stringify({
        "status" : "error",
        "errorMessage" : "РќРµРїСЂР°РІРёР»СЊРЅС‹Р№ Р»РѕРіРёРЅ РёР»Рё РїР°СЂРѕР»СЊ"
      });
      this.textOk = JSON.stringify({
        "status" : "ok",
        "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        "user" : {
          "name" : "John Doe"
        }
      });
      this.passwordValue = '';
    }

    async getServer(login){
        let url = `https://test-works.pr-uni.ru/api/${login}`;
        let response = await fetch(url);
        let result = await response.json();
        //если вернулся текст с успехом - обводим инпуты зеленым
        if(result == this.textOk){
            this.showGreen();
        //если вернулся текст с ошибкой - обводим инпуты красным и выводим текст об ошибке
        } else if(result == this.textError){
            this.showTextError();
        }
        return result;
    }

    //изменение значения поля login
    getValuePassword(){
        this.input.oninput = (event) => this.searchValue = event.target.value;
        return this.searchValue;
    }

    clickEvent(){
    //клик по кнопке входа
        this.button.onclick = () => this.getServer(this.searchValue);
    }

    //обводит инпуты зеленым
    showGreen(){
        this.inputUser.style.border = '1px solid rgba(67, 164, 112, 1)'
      }
    
      //выдает текст об ошибке и обводит инпуты красным
      showTextError(){
        error.innerHTML = 'Неправильный логин или пароль';
        this.inputUser.style.border = '1px solid rgba(246, 84, 84, 1)';
        this.userName.style.color = 'rgba(246, 84, 84, 1)';
        this.userPessword.style.color = 'rgba(246, 84, 84, 1)';
      }
  }
  
  //инициализация класса Autorization

  const error = document.querySelector('.errorText');
  const inputUser = document.querySelector('.inputUser');
  const inputPassword = document.querySelector('.inputPassword');
  const userName = document.getElementById('userName').value;
  const userPessword = document.getElementById('password').value;
  const button = document.querySelector('.btn');
  
  let checkUser = new Autorization(error, inputUser, inputPassword, userName, userPessword, button);
  checkUser.clickEvent();
  checkUser.getValuePassword();