<?php
    session_start();
    require 'class/Autoloader.php';
    Autoloader::register();

    $message = new Message();

    if(isset($_SESSION['user'])){
        $_SESSION['user'] = null;
        $message->setMessage('success', 'Disconnected');
    } else if(!isset($_SESSION['user'])){
        $message->setMessage('notconnected', 'You aren\'t connected');
    } else {
        $message->setMessage('fail', 'Retry');
    }

    echo $message->getJSON();
?>