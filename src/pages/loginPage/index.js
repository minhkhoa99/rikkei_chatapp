/** @format */
import "./style.css";
export let loginPage = /*html */ `   <section class = "background_login">
<div class="login_Wrapper">
    <img src="./imageData/Logo-gaoranger.jpg" alt="">
    <h2 style="margin:30px ;">Sign in to Group Super Sentai</h2>
    <div class="form_chat">

        <form action="" class="chat_login" id="chat_login">
            <div class="account">
                <p>Email address</p>

                <input type="email" name = "email" class="email_login" placeholder="Please enter your email">
            </div>
            <div id="erros_email"></div>
            <div class="password">
                <p>password</p>

                <input type="password" name="password" class="password_login" placeholder="Please enter your password">
            </div>
            <div id="erros_password"></div>

            <div class="btn_login">
                <button type="submit" class="btn" id = "btn">Login</button>
            </div>

        </form>

    </div>
    <div class="create_question">
        <button id = "create_question" >New to Sentai Chat? Create an account</button>
    </div>
    <div class="forgotpass">
        <button id="forgotpass">Forget your password? Click here</button>
    </div>
</div>



</section>

</body>
`;
