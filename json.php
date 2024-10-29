<?php
header("Content-Type: application/json"); // Set content type to JSON

$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    $name = $data['name'];
    $contact = $data['contact'];
    $email = $data['email'];
    $message = $data['message'];
    
    $to = "jssaditya09@gmail.com";  // Replace with your email
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nContact Number: $contact\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send message."]);
    }
}
?>
