<?php
    session_start();
    echo isset($_SESSION['user']) ? json_encode($_SESSION['user']) : 'null';
?>