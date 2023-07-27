<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

// Set up database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "blmsdb";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$mail = new PHPMailer(true);

// $sql = "SELECT `email` FROM `tblassignlocker`";
$sql = "SELECT `email` FROM `tblassignlocker` where 
datediff(`expiredateofLocker`,current_date) < 180 ";
$result = $conn->query($sql);

if ($result == TRUE) {
    while ($row = mysqli_fetch_assoc($result)) {
        $mail->addAddress($row["email"]);
        $mail->Subject = 'Safe deposit box rent expiring soon ';
        $mail->Body = "Your subscription of rent box expiring soon..!";
        // $mail->Body = "Hey ".$row['Name']." Your Bill is ".$row['Price']." . Please Pay as soon as possible";
        // Set up SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'isashan190138@gmail.com';
        $mail->Password = 'iaimpewsfammtejk';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Set up the message
        $mail->setFrom('isashan190138@gmail.com', 'shan');


        // Query the database to retrieve the email addresses of the recipients


        // try {
        //     $mail->send();
        //     echo "Email sent successfully to " . $row["email"] . "<br>";
        // } catch (Exception $e) {
        //     echo "Email could not be sent. Error: " . $mail->ErrorInfo . "<br>";
        // }


        // Initialize line number

        try {
            $mail->send();
            echo "<p style='color: grey;  font-size: 24px; font-weight: bold;'><i class='fas fa-check-circle'></i> ", "# Email sent successfully to " . $row["email"] . "</p>";
        } catch (Exception $e) {
            echo "<p style='color: red; font-size: 24px; font-style: italic;'><i class='fas fa-times-circle'></i> ", "# Email could not be sent. Error: " . $mail->ErrorInfo . "</p>";
        }
        // Increment line number after each line

        // Increment line number after each line
    }
}
// echo $success;
