<?php
$connection = mysqli_connect('localhost', 'root', '', 'game');


if (isset($_POST['btn'])) {
    $last_name = $_POST['lastname'];
    $first_name = $_POST['firstname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    $location = $_POST['location'];

//  insert data into the user_info table
    $request = "INSERT INTO user_info (FIRST_NAME,LAST_NAME, PASSWORD, EMAIL,PHONE,LOCATION) VALUES ('$first_name','$last_name', '$password', '$email','$phone','$location')";

    if (mysqli_query($connection, $request)) {
//  page if successful
        header('Location: login.php');
    } else {
//  if something goes wrong
        echo "Something went wrong Please try again.";
    }
}

//  connection
mysqli_close($connection);
?>

        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="w.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>
<body>


<div class="main">
   
<div class="m-list">
    <div class="list">
    <h3>User Profile</h3>
    <p class="pm-i" ><i class="fa fa-user-circle"></i>User info</p>
    <p class="p-i"><i class="fa fa-heart"></i>Favorites</p>
    <p class="p-i"><i class="fa fa-star"></i>Watchlist</p>
    <p class="p-i"><i class="fa fa-cog"></i>Setting</p>
    <p class="p-i"><i class="fa fa-bell"></i>Notifications</p>
    <p class="log-out p-i"><a href="index.html"><i class="fa fa-power-off"></i>Log out</a></p>
</div>
</div>


<div class="img">
<img src="img-game/WhatsApp Image 2024-04-23 at 01.36.40_572ba65c.jpg">
</div>
<div class="m-pf">
<h5>diaa Yusuf<p class="pf">New York.USA</p></h5>

</div>

<div class="m-main">
    <form action="login.php" method="post">
<div class="inputss">
<div class="inputs">
    <div class="inpu">
    <p class="p-input">FirstName</p>
    <div class="input"><input type="text" name="firstname" required></div>
</div>
    <div class="inpu">
    <p class="p-input"> LastName</p>   
    <div class="input"><input type="text"name="lastname" required></div>
</div>
</div>
<div class="inputs">
    <div class="inpu">
    <p class="p-input">Email Adrress</p>
    <div class="input"><input type="email" name="email" required></div>
</div>
    <div class="inpu">
    <p class="p-input">Phone Number</p>   
    <div class="input"><input type="number" name="phone" required></div>
</div>
</div><div class="inputs">
    <div class="inpu">
    <p class="p-input">Location</p>
    <div class="input"><input type="text"name="location" required></div>
</div>
    <div class="inpu">
    <p class="p-input">password</p>   
    <div class="input"><input type="number" name="password" size="15" minlength="5" maxlength="10"  required></div>
</div>

</div>
<div class="button">
<button type="submit">save Changes</button>
</div>
</form>
</div>

</div>

</div>
</body>
</html>