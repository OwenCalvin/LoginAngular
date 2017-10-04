<?php
    session_start();
    require 'class/Autoloader.php';
    Autoloader::register();

    $message = new Message();
    $_PARAM = json_decode(file_get_contents('php://input'), true);

    if(!isset($_SESSION['user'])){
        if(!NotEmpty::isNotEmpty($_PARAM)){
            $conn = Database::getConnection();
            $row = Database::execute($conn, 'SELECT username, email, password FROM users WHERE LOWER(username)=LOWER(:log) OR LOWER(email)=LOWER(:log)', array(':log' => $_PARAM['log']));

            if(!Database::isEmptyRes($row)){
                $row = $row->fetch();
                if(password_verify($_PARAM['password'], $row['password'])){
                    $_SESSION['user'] = new User($row['username'], $row['email']);
                    $message->setSuccess($_SESSION['user']);
                } else {
                    $message->setMessage('wrong', 'Wrong username or password');
                }
            } else {
                $message->setMessage('wrong', 'Wrong username or password');
            }
        } else {
            $message->setMessage('empty', 'Please enter values');
        }
    } else {
        $message->setMessage('already', 'You are already connected');
    }

    echo $message->getJSON();
?>