/** @format */
import "./styleregis.css";
export let createAccount = /*html */ `<body>

<section class ="body_style">
    <div class="create_Wrapper">
        <img src="./imageData/Logo-gaoranger.jpg" alt="">

        <h2>Create new account</h2>
        <div class="form_chat">
            <form action="" class="chat_create_account" id="chat_create_account">
                <div class="create_firstname">
                    <p>First Name</p>
                    <input type="text" name = "firstName" class="firstname_create" placeholder="Please enter your firstname">
                </div>
                <div id ="err_firstName"></div>
                <div class="create_latstname">
                    <p>Last Name</p>

                    <input type="text" name = "lastName" class="lastname_create" placeholder="Please enter your lastname">
                </div>
                <div id ="err_lastName"></div>

                <div class="create_email">
                    <p>Email Address</p>

                    <input type="email" name = "emailAdress" class="email_create" placeholder="Please enter your email">
                </div>
                <div id ="err_email"></div>

                <div class="create_password">
                    <p>Password</p>

                    <input type="password" name ="passwordAddress" class="password_create" placeholder="Please enter your pasword">
                </div>
                <div id ="err_password"></div>


                <div class="password_confirm">
                    <p>Confirm Password</p>

                    <input type="password" name ="confirmPassword" class="password_complete" placeholder="Confirm password">
                </div>
                <div id ="err_confirm"></div>

                <div class="btn_create">
                    <button class="btn" type="submit">Create</button>

                <p id ="server_err_message"></p>

                <p id ="server_success_message"></p>


                </div>

            </form>

        </div>
        <div class="create_question">
            <p>New to Sentai Chat? <a href="3">Create an account</a></p>
        </div>

    </div>

</section>

</body>
`;
