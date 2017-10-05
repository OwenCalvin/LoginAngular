<?php
    session_start();
    require 'class/Autoloader.php';
    Autoloader::register();

    $message = new Message();
    $_PARAM = json_decode(file_get_contents('php://input'), true);

    if(!isset($_SESSION['user'])) {
        if(!NotEmpty::isNotEmpty($_PARAM)) {
            if($_PARAM['password'] == $_PARAM['passwordConfirm']) {
                $username = strip_tags($_PARAM['username']);
                $email = strip_tags($_PARAM['email']);
                $password = password_hash($_PARAM['password'], PASSWORD_BCRYPT);

                $conn = Database::getConnection();
                $resUsername = Database::isEmptyExecute($conn, 'SELECT username FROM users WHERE username=?', array($username));
                $resEmail = Database::isEmptyExecute($conn, 'SELECT email FROM users WHERE email=?', array($email));

                if($resUsername) {
                    if($resEmail) {
                        Database::execute($conn, 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)', array($username, $email, $password));
                    
                        $_SESSION['user'] = new User($username, $email);
                        
                        $message->setMessage('success', 'You are registered', $_SESSION['user']);
                    } else {
                        $message->setMessage('exist', 'This e-mail exist, please choose another one');
                    }
                } else {
                    $message->setMessage('exist', 'This username exist, please choose another one');
                }
            } else {
                $message->setMessage('notmatch', 'Password doesn\'t match');
            }
        } else {
            $message->setMessage('empty', 'Please enter values');
        }
    } else {
        $message->setMessage('already', 'You are already connected');
    }

    echo $message->getJSON();
?>